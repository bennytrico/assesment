import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';

function Grid(props) {
    return(
        <TouchableWithoutFeedback onPress={() => {
            props.actions(props.event.item)
        }}>
            <View style={style.gridViewBlock}>
                <Text style={style.gridViewInsideText}>{props.event.item.name}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
}
const style = StyleSheet.create({
    gridViewBlock: {
        justifyContent: 'center',
        flex:1,
        alignItems: 'center',
        height: 100,
        margin: 5,
        width: 100,
        backgroundColor: 'white'
    },
    gridViewInsideText: {
        padding: 10,
        fontSize: 12,
        justifyContent: 'center',
    }
});

export default Grid