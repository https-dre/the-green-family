import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome6"

export const Marcador = ({ title = "TaskTitle", data = new Data(), isChecked = true }) => {
    const checked = isChecked ? <Icon name="check" size={20} color="black" /> : null
    return (
        <View style={{flexDirection: "row", alignItems: "center", gap: "200%"}}>
            <View style={styles.marcador}>
                <Icon name="bars" size={25} color="black" />
                <View style={{ height: "100%", width: 5, backgroundColor: "#FFE179", borderRadius: 100 }}></View>
                <TouchableOpacity style={{ gap: 5 }}>
                    <Text style={styles.titleText}>{title}</Text>
                    <Text style={styles.dataText}>{data.toLocaleDateString()}</Text>
                </TouchableOpacity>
            </View>

            {checked}
        </View>
    )
}

const styles = StyleSheet.create({
    marcador: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },
    dataText: {
        fontSize: 11,
        color: "#A4A4A4"
    },
    titleText: {
        fontSize: 17,
        color: "#303030",
        fontWeight: "bold"
    }
})
