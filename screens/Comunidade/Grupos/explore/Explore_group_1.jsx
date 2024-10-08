import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import { DonationRequest } from "../../../../components/DonationRequest";
import { ReceivedMessage } from "../../../../components/Messages/ReceivedMessage";
import { SendMessage } from "../../../../components/Messages/SendMessage";

const addMessage = (content, sender, time, messages, setMessages, requirePerfil = null) => {
    // console.error(content)
    // return
    const newMessage = (
        <SendMessage // Garante uma chave única
            key={messages?messages.lenght:0}
            sender={sender}
            time={time}
            content={content}
            requirePerfil={requirePerfil}
            style={styles.sendMessage}
        />
    );

    // Atualiza o estado com a nova mensagem
    setMessages([...messages, newMessage]);
}

export const Explore_group_1 = () => {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);

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
                    sender="Sophia"
                />
                <ReceivedMessage
                    sender="Sophia"
                    time="9:12 AM"
                    content="Bom dia! Alguém poderia contribuir, por favor?"
                    style={styles.receivedMessage}
                />
                <SendMessage
                    sender="Leonardo"
                    time="10:00 AM"
                    content="Bom dia! Eu tenho algumas usadas do meu filho, só tem duas semanas de uso. Gostaria de me encontrar no parque para eu te entregar?"
                    style={{ marginTop: 10 }}
                />
                {messages}
            </ScrollView>
            <View style={styles.senderMessageView}>
                <TextInput
                    placeholder="Digite sua mensagem..."
                    style={styles.senderInput}
                    onChangeText={setMessage}
                    value={message} // Para garantir que o valor do input é controlado
                />
                <TouchableOpacity
                    style={styles.senderIcon}
                    onPress={() => {
                        // Chama a função addMessage corretamente
                        // setMessages(["Algo", "Teste"])
                        // console.error("Messages: ", messages)
                        addMessage(message, "Leonardo", "10:00 AM", messages, setMessages);
                        setMessage(""); // Limpa o campo de entrada
                    }}
                >
                    <Icon name="send" size={20} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainView: {
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
    },
    sendMessage: {
        marginTop: 10
    }
});

export default Explore_group_1;
