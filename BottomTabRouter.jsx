import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "./screens/HomeScreen"

const Tab = createBottomTabNavigator();

export function BottomTabRouter() {
    return (
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen name="Home" 
                component={HomeScreen}
                screenOptions={{}}    
            />
        </Tab.Navigator>
    )
}