import { View, Text, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export const ComunidadeHeader = () => {
    return (
        <View style={styles.mainView}>
            <Text style={styles.title}>Grupos</Text>
            <Icon name="search" size={25} style={styles.search}/>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: "700"
    },
    mainView: {
        paddingVertical: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 15,
        backgroundColor: "white",
        paddingTop: 30
    },
    search: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        backgroundColor: "#D9D9D9",
        borderRadius: 10
    }
})