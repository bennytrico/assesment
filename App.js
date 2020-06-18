// In App.js in a new project

import * as React from 'react';
import { Button, SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/views/home/index.js';
import { useSelector } from 'react-redux';
import Main from './src/views/main/index.js';
import Detail from './src/views/detail/index.js';
import Tracking from './src/views/tracking/index.js';

const Stack = createStackNavigator();

function App() {
  const state = useSelector((state) => state.user.name)

  return (
      <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen} />
            <Stack.Screen options={{
                headerShown: true,
                headerLeft: null,
                headerTitle: `Welcome ${state}!`,
                headerTitleStyle: {alignSelf: 'center'}
              }} 
              name="Main" 
              component={Main} />
              <Stack.Screen options={{
                headerShown: false,
                headerTitle: `Welcome ${state}!`,
              }} 
              name="Detail" 
              component={Detail} />
              <Stack.Screen options={{
                headerShown: true,
                headerLeft: null,
                headerTitle: `List of Event ${state} Tracking`,
                headerTitleStyle: {alignSelf: 'center'}
              }} 
              name="Tracking" 
              component={Tracking} />
          </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;