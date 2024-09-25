import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Loading } from "./screens/Loading";

const Stack = createNativeStackNavigator();

export const NativeStackRouter = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Loading" component={Loading}/>
        </Stack.Navigator>
    )
}