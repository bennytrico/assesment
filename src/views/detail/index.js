import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import { useDispatch, useSelector } from 'react-redux'
import { setAddEventTrackingUser, deleteEventTrackedUser } from '../../store/actions/user';

function Detail({navigation, route}) {
    const dispatch = useDispatch();
    const [isListed, setIsListed] = useState(false);
    const trackingListUser = useSelector((state => state.user.trackingList));

    useEffect(() => {
        updateCheckListed()
    });

    function goToTracking() {
        navigation.push("Tracking");
    }
    
    function updateCheckListed() {
        if (trackingListUser.length == 0)  {
            setIsListed(false);
        } else {
            let flag = false;
            trackingListUser.map(data => {
                if (route.params.data.id === data.id) {
                    flag = true
                }
            })

            if (flag) {
                setIsListed(true);
            } else {
                setIsListed(false);
            }
        }
    }


    return(
        <GestureRecognizer style={style.container} onSwipeLeft={() => goToTracking()}>
            <View>
                <View style={style.photo}>
                    <Text style={{color: 'white'}}>Photo</Text>
                </View>
                <View style={style.title}>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>{route.params.data.name}</Text>
                </View>
                <View style={style.status}>
                    <Text style={{fontSize: 15, textTransform: 'capitalize'}}>{route.params.data.status_entry}</Text>
                </View>
                <View style={style.location}>
                    <Text style={{fontSize: 15, color: 'gray', textTransform: 'capitalize'}}>at {route.params.data.location}</Text>
                </View>
                <View style={style.description}>
                    <Text style={{fontSize: 14, textAlign: 'justify'}}>{route.params.data.description}</Text>
                </View>
            </View>
            {
                ! isListed ?  
                    <TouchableOpacity style={style.button} onPress={() => {
                        dispatch(setAddEventTrackingUser(route.params.data))
                        updateCheckListed()
                    }}>
                        <Text style={{color: 'white'}}>
                            Add to List Tracking
                        </Text>
                    </TouchableOpacity>
                    :  
                    <TouchableOpacity style={style.buttonRemove} onPress={() => {
                        dispatch(deleteEventTrackedUser(route.params.data))
                        updateCheckListed()

                    }}>
                        <Text style={{color: 'white'}}>
                            Remove from List Tracking
                        </Text>
                    </TouchableOpacity>
            }
        </GestureRecognizer>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    photo: {
        width: Dimensions.get('window').width,
        justifyContent: 'center',
        height: 200,
        backgroundColor: '#00BCD4',
        alignItems: 'center'
    },
    title: {
        alignItems: 'center'
    },
    status: {
        alignItems: 'center',
    },
    location: {
        alignItems: 'center',
    },
    description: {
        paddingHorizontal: 10,
        marginTop: 10
    },
    button: {
        borderRadius: 10,
        marginTop: 20,
        backgroundColor: '#00BCD4',
        padding: 10
    },
    buttonRemove: {
        borderRadius: 10,
        marginTop: 20,
        backgroundColor: 'red',
        padding: 10
    }
});

export default Detail;