import { SafeAreaView, Text, View, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export const BebeInfo = ({ nomeBebe, idade }) => {
    return (
        <View>
            <Image style={styles.imageStyle} source={require("../assets/examples/bebe.jpg")} />
            <View style={styles.bebeInfo}>
                <View>
                    <Text style={[{ color: "white" }, styles.title]}>{nomeBebe}</Text>
                    <Text style={{ color: "white" }}>{idade}</Text>
                </View>

                <TouchableOpacity>
                    <Icon name="ellipsis-v" size={25} color={"gray"} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    bebeInfo: {
        position: "absolute",
        zIndex: 1000,
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between"

    },
    title: {
        fontSize: 35,
        fontWeight: 600
    },
    imageStyle: {
        width: "100%",
        borderTopEndRadius: 7,
        borderTopStartRadius: 7
    }
})