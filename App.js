import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { NativeStackRouter } from './NativeStackRouter.jsx';

export default function App() {
  return (
    <NavigationContainer>
      <NativeStackRouter/>
      <StatusBar/>
    </NavigationContainer>
  );
}