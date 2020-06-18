import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'

const style = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center"
    },
    button: {
        marginTop:10,
        paddingTop:15,
        paddingBottom:15,
        backgroundColor:'#00BCD4',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff',
        width: 100
    },
      textStyle: {
        color: "white",
        textAlign: "center"
    }
});

function Switcher(props) {
    return (
        <View style={style.container}>
            <TouchableOpacity style={style.button} onPress={() => props.changeToListView()} title="ver 1">
                <Text style={style.textStyle}>List View</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.button} onPress={() => props.changeToGridView()} title="ver 1">
                <Text style={style.textStyle}>Grid View</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Switcher;