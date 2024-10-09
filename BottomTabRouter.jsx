import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome6';

import { HomeScreen } from "./screens/Home/HomeScreen";
import { ComunidadeControle } from './screens/ComunidadeControle';
import { Informacoes } from "./screens/Informacoes"
import { CalendarScreen } from './screens/CalendarScreen';
import { HomeControl } from './screens/Home/HomeControl';

const Tab = createBottomTabNavigator();

export function BottomTabRouter() {
    const tabNavigatorScreenOptions = ({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            // Defina o nome do ícone com base na rota
            if (route.name === 'Home') {
                iconName = 'home';
            } else if (route.name === 'Comunidade') {
                iconName = 'users'; // Altere para o ícone desejado para Comunidade
            }
            switch (route.name) {
                case 'Home':
                    iconName = "house"
                    break;
                case 'Comunidade':
                    iconName = "earth-americas"
                    break;
                case 'Informações':
                    iconName = 'magnifying-glass'
                    break;
                case 'Mais':
                    iconName = 'bars'
                    break;
                case 'Calendário':
                    iconName = 'calendar'
                    break;
            }

            // Retorna o ícone com a cor amarela se a aba estiver ativa
            return <Icon name={iconName} color={focused ? 'yellow' : color} size={size} />;
        },
        tabBarActiveTintColor: '#D3C438', // Cor do ícone quando ativo
        tabBarInactiveTintColor: 'white', // Cor do ícone quando inativo
        headerShown: false, // Ocultar cabeçalho
        tabBarStyle: styles.barStyle, // Estilo do tab bar
    })
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={tabNavigatorScreenOptions}
        >
            <Tab.Screen
                name="Mais"
                component={HomeScreen}
            />

            <Tab.Screen
                name="Comunidade"
                component={ComunidadeControle} // Certifique-se de que o componente está correto
            />

            <Tab.Screen
                name="Home"
                component={HomeControl}
            />

            <Tab.Screen
                name="Calendário"
                component={CalendarScreen}
            />

            <Tab.Screen
                name="Informações"
                component={Informacoes}
            />

        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    barStyle: {
        backgroundColor: "#408A26",
        borderTopEndRadius: 10,
        borderTopWidth: 20,
        borderBlockColor: "#D3C438",
        height: 70 
    },
    labelStyle: {
        color: "white"
    },
    IconStyle: {
        background: "white"
    }
});
