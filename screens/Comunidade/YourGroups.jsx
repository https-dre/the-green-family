import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Grupo } from "../../components/Grupo";

import data from "../../assets/data/groups.json"

const groups = Object.entries(data.yourGroups)

const handleGroups = (array, navigation) => {
    let components = []
    array.forEach(([index, e]) => {
        const navgString = `YourGroups_group_${index}`
        components.push(
            <Grupo 
                key={index}  // Adicione a propriedade key aqui
                groupName={e.name} 
                desc={e.desc} 
                isFavorited={e.isFavorited} 
                count={e.count}
                onPress={()=>{navigation.push(navgString)}}
            />
        )
    })

    return components
}

export const YourGroups = ({navigation}) => {
    const groupList = handleGroups(groups, navigation)
    return (
        <ScrollView style={{ backgroundColor: "white", flex: 1 }}>
            <View style={styles.explorePopulares}>
                <View>
                    <Text style={{ fontSize: 28, fontWeight: "bold" }}>Grupos que você entrou</Text>
                </View>
            </View>
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