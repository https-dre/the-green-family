import { View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";

import { ButtonWithIcon } from "./ButtonWithIcon"

export const HomeIsland = ({ navigation, children, ...rest }) => {

    return (
        <View style={[styles.HomeIsland, rest.style]} {...rest}>
            {children}

            <View style={{ padding: 15 }}>
                <TextInput style={styles.textInput} placeholder="Do que você precisa?" />
                <View style={{ flexDirection: "row", gap: 10 }}>
                    <ButtonWithIcon style={{ backgroundColor: "#2A6642" }} text="Doações" icon="heart-o" fontColor="#ADFFBA" onPress={() => navigation.navigate("DoacoesRecebidas")}/>
                    <ButtonWithIcon style={{ backgroundColor: "#E5D47C" }} text="Mapa" icon="map-marker" fontColor="#D19829" onPress={() => navigation.navigate("Mapa")}/>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    HomeIsland: {
        flex: 1,
        borderRadius: 7,
        gap: 10,
        backgroundColor: "white",
        shadowColor: '#000',      // Cor da sombra
        shadowOffset: { width: 0, height: 2 },  // Deslocamento da sombra
        shadowOpacity: 0.25,      // Opacidade da sombra
        shadowRadius: 3.84,       // Raio da sombra
        elevation: 5,             // Necessário para Android

    },
    textInput: {
        padding: 15,
        backgroundColor: "#F7F7F7",
        color: "#8A8A8A",
        marginBottom: 10,
        borderRadius: 5
    }
})