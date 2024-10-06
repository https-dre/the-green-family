import React, { Suspense } from 'react';
import { SafeAreaView, Text, View, TextInput, requireNativeComponent } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from "@react-navigation/native";

import { Comunidade } from "./Comunidade";
import { Login } from "./Login";
import { Group } from "./Comunidade/Group";
import * as groupsComponents from "./Comunidade/Grupos"

import { ComunidadeHeader } from "../components/ComunidadeHeader";
import { GroupsHeader } from '../components/GroupsHeader';

import data from "../assets/data/groups.json"

const Stack = createStackNavigator()

// const handleRouteGroups = (dataGroups) => {
//     let routes = []
//     Object.entries(dataGroups).forEach(([index, e])=>{ // Entra em todas as classes de grupos
//         Object.entries(e).forEach(([key, group])=>{ // Entra em todos os grupos
//             routes.push(
//                 <Stack.Screen
//                     name={group.name}
//                     component={getLazyComponent(`./Comunidade/Grupos/${index}/group_${key}`)}
//                 />
//             )
//         })
//     })

//     return routes
// }

const handleRouteGroups = (components) => {
    const groups = []
    let i = 1
    Object.entries(groupsComponents).forEach(([index, component])=>{
        groups.push(
            <Stack.Screen
                key={index}
                name={index}
                component={component}
                options={{
                    header: () => 
                        <GroupsHeader
                            imagePath="../assets/examples/3d_avatar_12.jpg"
                            name={index}
                        />
                    
                }}
            />
        )
        i++
    })

    return groups
}

// const getLazyComponent = (path) => {
//     return React.lazy(() => import(path));
// };

// const getComponent = (path, component) => {
//     const module = require(path)
//     return module[component]
// }


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
                {handleRouteGroups(groupsComponents)}
            </Stack.Navigator>
        </NavigationContainer>
    )
}