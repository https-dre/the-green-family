import { TouchableOpacity, View, Image, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"

const lorem = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, rerum?"

export const Grupo = ({ navigation, groupName = "DefaultGroupName", desc = lorem, isFavorited = false, count = 200, onPress }) => {
    return (
        <TouchableOpacity style={styles.grupo} onPress={()=>{onPress()}}>
            <View style={{ backgroundColor: "white" }}>
                <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
                    <Image source={require("../assets/examples/3d_avatar_12.jpg")} />
                    <Text style={styles.groupName}>{groupName}</Text>
                    <Icon name={isFavorited ? "heart" : "heart-o"} size={18} color="black" />
                </View>
            </View>
            <View style={{ backgroundColor: "white", flexDirection: "column", alignItems: "flex-end" }}>
                <Text style={styles.groupDescription}>{desc}</Text>

                <View style={{flexDirection: "row", gap: 5, alignItems: "flex-end"}}>
                    <Icon name="users" color={"#606061"} size={20} />
                    <Text style={{color: "#515151"}}>{count}</Text>
                </View>

            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    grupo: {
        marginHorizontal: 20,
        padding: 20,
        paddingBottom: 9,
        borderRadius: 7,
        gap: 10,
        backgroundColor: "white",
        shadowColor: '#000',      // Cor da sombra
        shadowOffset: { width: 0, height: 2 },  // Deslocamento da sombra
        shadowOpacity: 0.25,      // Opacidade da sombra
        shadowRadius: 3.84,       // Raio da sombra
        elevation: 5,             // Necessário para Android
    },
    groupName: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#303030",
        maxWidth: "70%"
    },
    groupDescription: {
        color: "#666666",
        fontSize: 15,
        width: "100%",
    }
})