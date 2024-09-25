import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabRouter } from "./BottomTabRouter"

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabRouter/>
      <StatusBar/>
    </NavigationContainer>
  );
}