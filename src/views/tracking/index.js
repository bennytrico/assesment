import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import { useSelector, useDispatch } from 'react-redux';
import Thumbnail from '../../components/thumbnail/index.js';
import { useIsFocused } from '@react-navigation/native';

function Tracking({navigation}) {

    const state = useSelector(state => state.user.trackingList);
    const isFocused = useIsFocused()

    function goToDetail(payload) {
        navigation.navigate('Detail', { data: payload })
    }
    useEffect(() => {

    }, [isFocused])

    return(
        <GestureRecognizer style={style.container} onSwipeRight={() => {
            navigation.goBack()
        }}>
            <View style={{flex: 1}}>
                <ScrollView style={{flex: 1}}>
                    {
                        state.map((data, index) => {
                            return <Thumbnail 
                                actions={goToDetail}
                                index={index} 
                                key={data.id} 
                                event={data}/>
                        })
                    }
                </ScrollView>
            </View>
        </GestureRecognizer>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
});

export default Tracking;