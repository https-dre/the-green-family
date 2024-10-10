import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export const NativeStackRouter = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            
        </Stack.Navigator>
    )
}