import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native"

import Icon from "react-native-vector-icons/FontAwesome5"

export const Artigo = ({titulo = "Título", conteudo = "Conteúdo!", views = 0, imagemArtigo = "../assets/examples/bebe-informacoes.jpg"}) => {
    return (
        <View style={styles.artigo}>
            <View style={styles.containerTituloImage}>
                <Image  style={styles.imagemArtigo}source={require("../assets/examples/bebe-informacoes.jpg")} />
                <Text style={styles.tituloArtigo}>{titulo}</Text>
            </View>
            <View style={{ padding: 15, gap: 10 }}>
                <Text style={{color: "#646464"}}>
                    {conteudo}
                </Text>
                <View style={{flexDirection: "row", gap: 10, alignItems: "center"}}>
                    {/* Botão Ler Mais */}
                    <TouchableOpacity style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
                        <Icon name="arrow-right" size={12} color="#80B3FF"/>
                        <Text style={{color: "#80B3FF"}}>Ler Mais</Text>
                    </TouchableOpacity>

                    <View style={{flexDirection: "row", gap: 5, alignItems: "center"}}>
                        <Icon name="eye" color="#B1AEAE"/>
                        <Text style={{color: "#B1AEAE"}}>{views} Visualizações</Text>
                    </View>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    artigo: {
        shadowColor: '#000000',      // Cor da sombra
        shadowOffset: { width: 1, height: 1 },  // Deslocamento da sombra
        shadowOpacity: 0.10,      // Opacidade da sombra
        shadowRadius: 3.84,       // Raio da sombra
        elevation: 5,             // Necessário para Android,
        minWidth: 200,
        backgroundColor: "white",
        borderRadius: 7,
        marginVertical: 10

    },
    tituloArtigo: {
        fontWeight: "bold",
        fontSize: 18,
        color: "#2F2F2F",
        margin: 5,
        maxWidth: "65%"
    },
    containerTituloImage: {
        flexDirection: "row",
        gap: 5,
    },
    imagemArtigo: {
        borderBottomRightRadius: 17,
        borderTopLeftRadius: 7,
        width: "30%"
    }
})