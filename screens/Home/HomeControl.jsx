import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "./HomeScreen";
import { Mapa } from "./Mapa";
import { DoacoesRecebidas } from "./DoacoesRecebidas";

const Stack = createStackNavigator();

export const HomeControl = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="Mapa" component={Mapa} />
            <Stack.Screen name="DoacoesRecebidas" component={DoacoesRecebidas} />
        </Stack.Navigator>
    )
}