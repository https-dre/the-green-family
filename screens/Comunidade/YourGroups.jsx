import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Grupo } from "../../components/Grupo";

const groups = [
    {
        name: "Apoio para pais de primeira viagem",
        desc: "Comunidade que apoia pais de primeira viagem e visa um futuro melhor para os filhos.",
        count: 1.2
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

export const YourGroups = () => {
    const groupList = handleGroups(groups)
    return (
        <ScrollView style={{ backgroundColor: "white", flex: 1 }}>
            <View style={styles.explorePopulares}>
                <View>
                    <Text style={{ fontSize: 28, fontWeight: "bold" }}>Grupos que você entrou</Text>
                </View>
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