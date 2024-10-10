import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import { DonationRequest } from "../../../../components/DonationRequest";
import { ReceivedMessage } from "../../../../components/Messages/ReceivedMessage";
import { SendMessage } from "../../../../components/Messages/SendMessage";

const addMessage = (content, sender, time, setMessages, requirePerfil = null) => {
    const newMessage = (
        <SendMessage // Garante uma chave única
            key={Math.random()} // Usando Math.random() para gerar uma chave única
            sender={sender}
            time={time}
            content={content}
            requirePerfil={requirePerfil}
            style={styles.sendMessage}
        />
    );

    // Atualiza o estado com a nova mensagem
    setMessages(prevMessages => [...prevMessages, newMessage]);

    const videoMessage = "Bom dia! Eu tenho algumas usadas do meu filho, só tem duas semanas de uso. Gostaria de me encontrar no parque para eu te entregar?";
    const videoMessage2 = "Pode sim";

    // Verifica o conteúdo da mensagem e adiciona mensagens recebidas com delay
    if (content === videoMessage) {
        setTimeout(() => {
            setMessages(prevMessages => [
                ...prevMessages,
                <ReceivedMessage
                    key={Math.random()} // Chave única para a mensagem recebida
                    sender="Sophia"
                    time="10:01 PM"
                    content="Claro, pode ser hoje à tarde?"
                    style={styles.sendMessage}
                />
            ]);
        }, 500);
    } else if (content === videoMessage2) {
        setTimeout(() => {
            setMessages(prevMessages => [
                ...prevMessages,
                <ReceivedMessage
                    key={Math.random()} // Chave única para a mensagem recebida
                    sender="Sophia"
                    time="10:01 PM"
                    content="Então, te vejo lá"
                    style={styles.sendMessage}
                />
            ]);
        }, 500);
    }
};

const addReceivedMessage = (content, sender, time, setMessages, requirePerfil = null) => {
    const newMessage = (
        <ReceivedMessage
            key={Math.random()} // Usando Math.random() para gerar uma chave única
            sender={sender}
            time={time}
            content={content}
            requirePerfil={requirePerfil}
            style={styles.sendMessage}
        />
    );

    // Atualiza o estado com a nova mensagem
    setMessages(prevMessages => [...prevMessages, newMessage]);
};

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
                        addMessage(message, "Leonardo", "10:00 AM", setMessages);
                        setMessage(""); // Limpa o campo de entrada
                    }}
                >
                    <Icon name="send" size={20} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

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
