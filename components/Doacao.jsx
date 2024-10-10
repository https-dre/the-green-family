import { View, Image, Text, StyleSheet } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import Icon from "react-native-vector-icons/FontAwesome6"

export const Doacao = ({ description = "Lorem Ipsum", autorName = "Alguém" }) => {
    return (
        <View style={styles.box}>
            <View style={styles.header}>
                {/* User View */}
                <View style={{ flexDirection: "row", gap: 15, alignItems: "center" }}>
                    <Image source={require('../assets/examples/donation-example.png')} />
                    <Text style={{fontWeight: "bold", fontSize: 18}}>Por {autorName}</Text>
                </View>
                <View>
                    <TouchableOpacity style={{ padding: 10 }}>
                        <Icon name="ellipsis" size={20} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            {/* Body */}
            <View style={styles.body}>
                <Text style={{maxWidth: "60%"}}>{description}</Text>
                <View>
                    <TouchableOpacity>
                        <Icon name="message" size={15} color="#707070" style={{ padding: 10 }} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        marginVertical: 10,
        backgroundColor: "white",
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5, // Sombra no Android
        padding: 15,
        borderRadius: 10,

        width: "90%",
        justifyContent: "space-between",
        gap: 15

    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    body: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end"
    }
})