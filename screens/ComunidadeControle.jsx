import { SafeAreaView, Text, View, TextInput } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";

import { Comunidade } from "./Comunidade";
import { Login } from "./Login";
import { Group } from "./Comunidade/Group";

import { ComunidadeHeader } from "../components/ComunidadeHeader";

const Stack = createStackNavigator()

export const ComunidadeControle = () => {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator>
                <Stack.Screen 
                    name="Grupos" 
                    component={Comunidade}
                    options={{
                        header: () => <ComunidadeHeader/>
                    }}
                />
                <Stack.Screen 
                    name="Grupo" 
                    component={Group}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}