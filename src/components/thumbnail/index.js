import React, { useEffect, useState } from 'react';
import { View, Text, TouchableWithoutFeedback, Dimensions, StyleSheet, Animated } from 'react-native';

const style = StyleSheet.create({
    container: {
        width: "100%",
        borderWidth: 1,
        borderColor: 'gray',
        width: Dimensions.get('window').width / 1,
        paddingHorizontal: 10,
        backgroundColor: 'white',
        paddingVertical: 10
    },
    containerTracking: {
        width: "100%",
        borderWidth: 1,
        borderColor: 'gray',
        width: Dimensions.get('window').width / 1,
        paddingHorizontal: 10,
        backgroundColor: '#00BCD4',
        paddingVertical: 10
    },
    leftAction: {
        flex: 1,
        paddingVertical: -100,
        backgroundColor: '#00BCD4',
        justifyContent: 'center',
        paddingHorizontal: 10,
    }, 
    actionText: {
        color: 'white'
    }
})

function Thumbnail(props) {
    const [styleContainer, setStyleContainer] = useState({});

    useEffect(() => {
        if (! props.event.tracking) {
            setStyleContainer(style.container)
        } else {
            setStyleContainer(style.containerTracking)
        }
    });
      
    return(
        <TouchableWithoutFeedback 
        onPress={() => {
            props.actions(props.event)
        }}
        key={props.event.id} >
            <View style={styleContainer}>
                <Text>Name: {props.event.name}</Text>
                <Text>Paid or Free: {props.event.status_entry}</Text>
                <Text>Location: {props.event.location}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default Thumbnail;