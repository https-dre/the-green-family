import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome6"
import { useState } from 'react'

// Ops: tem que otimizar isso aqui!

export const Marcador = ({ title = "TaskTitle", data = new Data(), isChecked = true }) => {
    const [checkState, setCheckState] = useState(isChecked)

    const handleCheckState = () => {
        setCheckState(prevState => !prevState)
    };

    return (
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 20 }}>
            <View style={styles.marcador}>
                <Icon name="bars" size={25} color="black" />
                <View style={styles.mark}></View>
                <TouchableOpacity style={{ gap: 5 }}
                    onPress={handleCheckState}
                >
                    <Text style={styles.titleText}>{title}</Text>
                    <Text style={styles.dataText}>{data.toLocaleDateString()}</Text>
                </TouchableOpacity>
            </View>

            {checkState && <Icon name="check" size={20} color="black" />}
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
    },
    mark: { 
        height: 40, 
        width: 4, 
        backgroundColor: "lightblue",
        borderRadius: 10
    }
})
