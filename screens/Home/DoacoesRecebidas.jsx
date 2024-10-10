import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome6"
import { Doacao } from "../../components/Doacao";

export const DoacoesRecebidas = ({ navigation }) => {
    const currentDate = new Date()
    const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
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
                    <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Hoje, {currentDate.getDay()} {meses[currentDate.getMonth()]}</Text>
                </View>

                {/* Lista de Doações */}
                <View style={styles.doacoesList}>
                    <Doacao autorName="Jeferson" description="Uniforme para colégio. Tamanho: PP. Modelo: Feminino"/>

                    <View style={{marginVertical: 20}}>
                        <View style={{width: "70%", height: 1, backgroundColor: "#D4D4D4"}}></View>
                        <Text style={[styles.withoutDonationMessage, {marginBottom: 10}]}>Sem mais doações</Text>
                        <Text style={styles.withoutDonationMessage}>Quando receber doações, elas aparecerão aqui.</Text>
                    </View>
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
        padding: 5,
        backgroundColor: "#EFEFEF",
        borderRadius: 10,
        marginTop: 5
    },
    withoutDonationMessage: {
        textAlign: "center",
        maxWidth: "45%",
        color: "#D4D4D4",
        fontWeight: "bold",
        fontSize: 15
    }
})