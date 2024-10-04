import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome6"

import { Grupo } from "../../components/Grupo";

const groups = [
    {
        name: "Itens Escolares",
        desc: "Comunidade para doações de livros e uniformes escolares da escola.",
        count: "2.9k"
    }
]

const handleGroups = (array) => {
    let components = []
    array.forEach((e, index) => {
        components.push(
            <Grupo 
                key={index}  // Adicione a propriedade key aqui
                groupName={e.name} 
                desc={e.desc} 
                isFavorited={e.isFavorited} 
                count={e.count} 
            />
        )
    })

    return components
}

export const Explore = () => {
    const groupList = handleGroups(groups)
    return (
        <ScrollView style={{ backgroundColor: "white", flex: 1 }}>
            <View style={styles.explorePopulares}>
                <View>
                    <Text style={{ fontSize: 28, fontWeight: "bold" }}>Populares</Text>
                    <Text>Os grupos mais ativos da Comunidade</Text>
                </View>
                <TouchableOpacity>
                    <Icon name="angle-right" color="black" size={30} />
                </TouchableOpacity>
            </View>
             {/* Grupos */}
             <View>
                {groupList}
             </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    explorePopulares: { 
        flexDirection: "row", 
        alignItems: "center", 
        justifyContent: "space-between", 
        paddingHorizontal: 20,
        marginVertical: 25 
    }
})