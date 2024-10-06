import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome6"

import { Grupo } from "../../components/Grupo";

import data from "../../assets/data/groups.json";


const groups = Object.entries(data.explore)

const handleGroups = (array, navigation) => {
    let components = []
    array.forEach(([index, e]) => {
        const navgString = `Explore_group_${index}`
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

export const Explore = ({navigation}) => {
    const groupList = handleGroups(groups, navigation)
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
             <View style={styles.groupsView}>
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
    },
    groupsView: {
        height: "100%"
    }
})