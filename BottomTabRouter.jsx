import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "./screens/HomeScreen";
import { Comunidade } from "./screens/Comunidade"; // Certifique-se de importar sua tela Comunidade
import { StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

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
                    iconName = "home"
                    break;
                case 'Comunidade':
                    iconName = "users"
                    break;
                case 'Informações':
                    iconName = 'search'
                    break;
                case 'Mais':
                    iconName = 'bars'
                    break;
                case 'Calendário':
                    iconName = 'calendar-o'
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
                component={Comunidade} // Certifique-se de que o componente está correto
            />

            <Tab.Screen
                name="Home"
                component={HomeScreen}
            />

            <Tab.Screen
                name="Calendário"
                component={HomeScreen}
            />

            <Tab.Screen
                name="Informações"
                component={HomeScreen}
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
