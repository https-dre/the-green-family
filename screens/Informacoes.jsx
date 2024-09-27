import { SafeAreaView, Text, StyleSheet, TouchableWithoutFeedback, ScrollView, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"

import { Artigo } from "../components/Artigo"

const listaDeArtigos = [
    {
        titulo: "Educação Alimentar Infantil: como evitar o desperdício e saber escolher alimentos orgânicos",
        conteudo: `A educação alimentar infantil é uma ferramenta crucial na formação de hábitos saudáveis que perduram por toda a vida. Ensinando as crianças desde cedo sobre a importância de uma alimentação equilibrada, rica em nutrientes e variada, podemos promover ...` ,
        views: 3
    },
    {
        titulo: "Dica Personalizada - brinquedos táteis feitos por reciclagem.",
        conteudo: `Em um mundo cada vez mais preocupado com a sustentabilidade, os brinquedos táteis feitos por reciclagem se destacam como uma alternativa inovadora e educativa. Esses brinquedos, produzidos a partir de materiais reciclados, não apenas contribuem para a redução de resíduos, mas também ...` ,
        views: 5
    }
]

const handleArtigos = (array) => {
    let elements = []
    for(const artigo of array) {
        elements.push(<Artigo titulo={artigo.titulo} conteudo={artigo.conteudo} views={artigo.views} />)
    }
    return elements
}

export const Informacoes = () => {
    const listaArtigos = handleArtigos(listaDeArtigos)
    
    return (
        <SafeAreaView style={styles.container}>
            <TouchableWithoutFeedback>
                <ScrollView style={{flex: 1, padding: 15}}>
                    <View style={{justifyContent: "flex-end", flexDirection: "row"}}>
                        <Icon name="user-circle-o" size={30} />
                    </View>
                    <Text style={{fontWeight: 700, fontSize: 30, color: "#2F2F2F"}}>Informações</Text>

                    <View style={{marginTop: 10}}>
                        {listaArtigos}
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})