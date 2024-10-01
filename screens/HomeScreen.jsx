import { SafeAreaView, Text, View, StyleSheet, ScrollView, TouchableWithoutFeedback, Keyboard,TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

import { ButtonWithIcon } from "../components/ButtonWithIcon";

import { HomeIsland } from "../components/HomeIsland"
import { BebeInfo } from "../components/BebeInfo"
import { ContainerObjetivos } from "../components/ContainerObjetivos";
import { Artigo } from "../components/Artigo";

export function HomeScreen() {
    
    return (
        <SafeAreaView style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <ScrollView style={[styles.container, { padding: 15 }]}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 15 }}>
                        <Icon name="moon-o" size={25} color="black" />
                        <Icon name="user-circle-o" size={30} color="black" />
                    </View>

                    <HomeIsland>
                        <BebeInfo nomeBebe="Gabriel" idade="1 ano, 5 meses" />
                    </HomeIsland>

                    <ContainerObjetivos />

                    <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                        <Text style={styles.textGrayBold}>Novas Informações</Text>
                        <TouchableOpacity style={[styles.verMais]}>
                            <Icon name="arrow-right" size={15} color="#80B3FF"/>
                            <Text style={{ color: "#80B3FF" }}>Ver Mais</Text>
                        </TouchableOpacity>
                    </View>
                    
                    <View>
                        <Artigo titulo="Telas: danos irreversíveis no desenvolvimento de bebês e crianças"/>
                    </View>

                </ScrollView>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    verMais: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: 80,
        alignItems: "center"
    },
    textGrayBold: {
        color: "#8A8A8A",
        fontWeight: "bold",
        fontSize: 18
    },
})