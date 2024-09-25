import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "./screens/HomeScreen"
import { StyleSheet } from "react-native";
import { Comunidade } from "./screens/Comunidade";

const Tab = createBottomTabNavigator();

export function BottomTabRouter() {
    const tabScreenOptions = {
        tabBarLabelStyle: styles.labelStyle, 
    }
    const tabNavigatorOptions = {
        headerShown: false, tabBarStyle: styles.barStyle,
    }

    return (
        <Tab.Navigator 
            initialRouteName="Home" 
            screenOptions={tabNavigatorOptions}
        >
            <Tab.Screen name="Comunidade" 
                component={Comunidade}
                options={tabScreenOptions}
            />
            
            <Tab.Screen name="Home" 
                component={HomeScreen}
                options={tabScreenOptions} 
            />
            
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    barStyle: {
        backgroundColor: "#408A26"
    },
    labelStyle: {
        color: "white"
    },
    IconStyle: {
        background: "white"
    }
})