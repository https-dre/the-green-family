import { View, Text, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export const ComunidadeHeader = () => {
    return (
        <View style={styles.mainView}>
            <Text style={styles.title}>Grupos</Text>
            <View style={styles.search}>
                <Icon name="search" size={25} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 35,
        fontWeight: "700"
    },
    mainView: {
        paddingVertical: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 15,
        backgroundColor: "white",
        paddingVertical: 35
    },
    search: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        backgroundColor: "#D9D9D9",
        borderRadius: 10
    }
})