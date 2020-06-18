import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList, Dimensions} from 'react-native';
import Switcher from './components/switcher/index'
import { useSelector } from 'react-redux';
import Thumbnail from '../../components/thumbnail/index.js';
import GestureRecognizer from 'react-native-swipe-gestures';
import Grid from '../../components/grid/index.js';

const style = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    content: {
        flex: 1,
        marginTop: 20
    }
});

function Main({navigation}) {
    const state = useSelector((state) => state.event);
    const [viewType, setViewType] = useState('List');

    function goToDetail(payload) {
        navigation.navigate('Detail', { data: payload });
    }

    function goToTracking() {
        navigation.push("Tracking");
    }

    function changeToListView() {
        setViewType('List');
    }

    function changeToGridView() {
        setViewType('Grid');
    }

    return (
        <GestureRecognizer style={style.container} 
        onSwipeLeft={() => goToTracking()}>
            <View >
                <View style={style.test}>
                    <Switcher changeToListView={changeToListView} changeToGridView={changeToGridView}></Switcher>
                </View>
                {
                    (viewType === 'List') 
                    ?
                        <ScrollView style={style.content}>
                        {state.event.map((data, index) => {
                            return <Thumbnail 
                                actions={goToDetail}
                                index={index} 
                                key={data.id} 
                                event={data}/>
                        })}
                        </ScrollView> 
                    :
                        <View style={{flex: 1, width: Dimensions.get('window').width}}>
                            <FlatList 
                                data={state.event}
                                renderItem={(item) => 
                                    <Grid actions={goToDetail} event={item}></Grid>
                                }
                                numColumns={2}
                            />
                        </View>
                }
            </View>
        </GestureRecognizer>
    );
}

export default Main;