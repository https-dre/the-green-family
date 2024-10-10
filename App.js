import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabRouter } from "./BottomTabRouter"
import { NativeStackRouter } from './NativeStackRouter';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from './screens/Login';
import { MainRouter } from './MainRouter';

const Stack = createNativeStackNavigator();

export default function App() {
  const [TabRouter, setTabRouter] = useState([])
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen
              name="Login"
              component={Login}
            />
            <Stack.Screen
              name="MainRouter"
              component={MainRouter}
            />
        </Stack.Navigator>
    </NavigationContainer>
  );
}