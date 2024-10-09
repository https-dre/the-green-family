import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome6"

export const DoacoesRecebidas = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#EFEFEF" }}>
            {/* Header */}
            <View style={styles.userIcon}>
                <Icon name="user" size={25} color='black' />
            </View>

            <View style={styles.header}>
                <TouchableOpacity style={{ padding: 10 }}
                onPress={() => navigation.navigate('HomeScreen')}>
                    <Icon name="angle-left" size={30} color="#2F2F2F" />
                </TouchableOpacity>

                <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#2F2F2F', maxWidth: "40%" }}>Doações Recebidas</Text>
            </View>

            <ScrollView>
                <View style={styles.dateDot}>
                    <Text style={{color: '#9A9A9A', fontWeight: 'bold'}}>Hoje, 1 Agosto</Text>
                </View>

                {/* Lista de Doações */}
                <View style={styles.doacoesList}>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        margin: 10,
        flexDirection: "row",
        alignItems: "center",
        gap: 20
    },
    userIcon: {
        alignItems: "flex-end",
        padding: 20
    },
    doacoesList: {
        alignItems: "center"
    },
    dateDot: {
        margin: "auto",
        padding: 3,
        backgroundColor: "#dcdcdc"
    }
})