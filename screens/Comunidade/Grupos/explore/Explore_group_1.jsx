import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import { DonationRequest } from "../../../../components/DonationRequest";
import { ReceivedMessage } from "../../../../components/Messages/ReceivedMessage";

export const Explore_group_1 = () => {
    return (
        <View style={styles.mainView}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <Text style={styles.date}>Hoje, 7 de outubro</Text>
                <DonationRequest
                    time="9:12 AM"
                    content={[
                        "Kit de canetinhas",
                        "Quantidade de cores: 12 ou mais",
                        "Lavável: sim"
                    ]}
                    sender = "Sophia"
                />
                <ReceivedMessage
                    sender="Sophia"
                    time="9:12 AM"
                    content="Bom dia! Alguém poderia contribuir, por favor?"
                    style={styles.receivedMessage}
                />
            </ScrollView>
            <View style={styles.senderMessageView}>
                <TextInput
                    placeholder="Digite sua mensagem..."
                    style={styles.senderInput}
                />
                <TouchableOpacity
                    style={styles.senderIcon}
                >
                    <Icon name="send" size={20}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        // margin: 10,
        height: "100%",
        width: "100%"
    },
    date: {
        alignSelf: "center",
        borderRadius: 50,
        backgroundColor: "white",
        padding: 7,
        color: "#989898",
        margin: 10
    },
    receivedMessage: {
        marginTop: 10
    },
    senderMessageView: {
        backgroundColor: "white",
        flexDirection: "row",
        // position: "absolute",
        // bottom: 12,
        width: "100%",
        height: 40,
        alignItems: "center",
        paddingHorizontal: 10
    },
    scrollView: {
        marginHorizontal: 10
    },
    senderInput: {
        width: "95%"
    },
    senderIcon: {
        width: "30%"
    }
})

export default Explore_group_1