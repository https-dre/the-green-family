import { SafeAreaView, Text, View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';

import { Explore } from "./Comunidade/Explore";
import { YourGroups } from "./Comunidade/YourGroups";
import { useState } from "react";

const Stack2 = createStackNavigator()

export const Comunidade = ({navigation}) => {

    const [explore, setExplore] = useState(styles.selected)
    const [yourGroups, setYourGroups] = useState(null)

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <View  style={styles.navBar}>
                <View style={styles.navMenu}>

                    {/* Explore */}
                    <TouchableOpacity 
                        style={styles.navButton}
                        onPress={()=> {
                            navigation.navigate("Explore")
                            setExplore(styles.selected)
                            setYourGroups(null)
                        }}
                    >
                        <Icon name="compass" size={20} style={{marginRight: 5}}/>
                        <Text>Explore</Text>
                    </TouchableOpacity>

                    {/* Seus Grupos */}
                    <TouchableOpacity 
                        style={styles.navButton}
                        onPress={()=> {
                            navigation.navigate("YourGroups")
                            setExplore(null)
                            setYourGroups(styles.selected)
                        }}
                    >
                        <Icon name="user" size={20} style={{marginRight: 5}}/>
                        <Text>Seus Grupos</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.bottomBar}>
                    <View style={[explore, {width:"50%"}]}></View>
                    <View style={[yourGroups, {width:"50%"}]}></View>
                </View>
            </View>
            <View style={{flex: 1, marginTop: 5}}>
                <Stack2.Navigator 
                    initialRouteName="Explore"
                    screenOptions={{ headerShown: false }}
                >
                    <Stack2.Screen 
                        name="Explore" 
                        component={Explore}
                    />
                    <Stack2.Screen 
                        name="YourGroups" 
                        component={YourGroups} 
                    />
                </Stack2.Navigator>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    navButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "50%",
        backgroundColor: 'transparent'
    },
    navBar: {
        paddingTop: 10,
        marginHorizontal: 15,
        justifyContent: "center",
        backgroundColor: "white"
    },
    navMenu: {
        justifyContent: "center",
        flexDirection: "row",
        backgroundColor: "transparent"
    },
    bottomBar: {
        backgroundColor: "#D9D9D9",
        height: 5,
        borderRadius: 10,
        marginTop: 4,
        overflow: "visible",
        flexDirection: "row",
        alignItems: "center"
    },
    selected: {
        padding: 4,
        backgroundColor: "green",
        width: "50%",
        borderRadius: 10
    }
})