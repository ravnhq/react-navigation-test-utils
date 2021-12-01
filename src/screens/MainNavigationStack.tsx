import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FirstScreen from './First/FirstScreen';
import SecondScreen from './Second/SecondScreen';

const Stack = createNativeStackNavigator();

const RootStack: React.FunctionComponent = () => {
  return (
    <Stack.Navigator initialRouteName={'FirstScreen'}>
      <Stack.Screen
        name="FirstScreen"
        component={FirstScreen}
        options={{title: 'First Screen'}}
      />
      <Stack.Screen name="SecondScreen" component={SecondScreen} />
    </Stack.Navigator>
  );
};

export default RootStack;
