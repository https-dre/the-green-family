import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import MapView from "react-native-maps";
import Icon from "react-native-vector-icons/FontAwesome"

export const Mapa = ({navigation}) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.titleView}>
                <TouchableOpacity style={{ borderRadius: 1000, backgroundColor: "#FFFFFF", padding: 10 }}
                    onPress={() => navigation.navigate('HomeScreen')}
                >
                    <Icon name="angle-left" size={"20%"} color="black" />
                </TouchableOpacity>
                <View style={{ borderRadius: 1000, backgroundColor: "#FFFFFF", padding: 10 }}>
                    <Icon name="search" size={"25%"} color="black" />
                </View>
                <Text style={{ fontSize: "25%", fontWeight: 'bold', color: '#2F2F2F' }}>Pontos de Doação</Text>

            </View>

            <MapView style={styles.map} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%'
    },
    titleView: {
        position: "absolute",
        marginTop: 40,
        marginLeft: 20,
        zIndex: 10000,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        gap: "10%"

    }
})