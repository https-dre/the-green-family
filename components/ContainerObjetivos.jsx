import { Text, View, StyleSheet, TouchableOpacity } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome5"

import { ButtonWithIcon } from "./ButtonWithIcon";

export const ContainerObjetivos = () => {
    function formatarData(data) {
        const mesesDoAno = [
            'Janeiro',
            'Fevereiro',
            'Março',
            'Abril',
            'Maio',
            'Junho',
            'Julho',
            'Agosto',
            'Setembro',
            'Outubro',
            'Novembro',
            'Dezembro'
        ];

        const dia = data.getDay()
        const mes = data.getMonth()

        return `${dia} de ${mesesDoAno[mes]}`;
    }

    const hoje = new Date()

    const dataFormatada = formatarData(hoje)
    return (
        <View style={{ marginVertical: 15 }}>
            <Text style={styles.textGrayBold}>Hoje, {dataFormatada}</Text>

            <View style={{ flexDirection: "row", gap: 15, marginVertical: 15 }}>
                <View style={styles.blueBox}>
                    <Text style={{ fontSize: 23, fontWeight: 700, color: "#66798F" }}>6/10</Text>
                    <Text style={{ fontSize: 15, color: "#8A8A8A" }}>Objetivos Concluídos</Text>

                    <TouchableOpacity style={[styles.button]}>
                        <Text style={{ color: "#80B3FF" }}>Ver Mais</Text>
                        <Icon name={"arrow-right"} size={15} color={"#80B3FF"} />
                    </TouchableOpacity>
                </View>

                <View style={[styles.blueBox, { width: "60%", flexDirection: "row", alignItems: "center" }]}>
                    <View style={{ width: "80%" }}>
                        <Text style={{ fontSize: 26, fontWeight: 700, color: "#66798F" }}>Novidades</Text>
                        <Text style={{ fontSize: 10 }}>
                            Recomendações de produtos, vídeos, palestras e novas atividades.
                        </Text>
                    </View>
                    <TouchableOpacity>
                        <Icon name="angle-right" size={30} color="#FFFFFF" />
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    textGrayBold: {
        color: "#8A8A8A",
        fontWeight: 700,
        fontSize: 18
    },
    blueBox: {
        backgroundColor: "#DFECF0",
        minHeight: 50,
        minWidth: 50,
        padding: 15,
        width: "35%",
        borderRadius: 35,
        justifyContent: "center",
        gap: 5
    },
    button: {
        flexDirection: "row",
        gap: 5
    }
})