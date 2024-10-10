import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabRouter } from "./BottomTabRouter"

export  function MainRouter() {
    return(
        <NavigationContainer independent={true}>
            <BottomTabRouter/>
            <StatusBar/>
        </NavigationContainer>
    )
}