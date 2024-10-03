import React, {useState} from 'react';
import { Text, Image, TextInput, TouchableOpacity, StyleSheet, View, SafeAreaView } from "react-native";

import { MessageBox } from '../components/MessageBox';

export function Cadastro() {
    const [visible, setVisible] = useState(false)

    return (
        <SafeAreaView style={styles.body}>
            <MessageBox 
            icon={"check-circle"}
            iconColor='#D3C438'
            text={"Cadastro realizado com sucesso!"}
            extVisible={visible}
            style={{backgroundColor: "#8da58c"}}
            onClose={() => setVisible(false)}
            />
            <Image
                source={require('../assets/family.png')}
                style={{width: "100%"}}
            />
            <View style={styles.inputsView}>
                <Text 
                    style={{color: "#266B0E", fontSize: 40, fontWeight: "800", marginBottom: 10}}
                >
                    Cadastro
                </Text>
                <View style={styles.viewInput}>
                    <Text>Nome</Text>
                    <TextInput style={styles.input}></TextInput>
                </View>
                <View style={styles.viewInput}>
                    <Text>E-mail</Text>
                    <TextInput style={styles.input}></TextInput>
                </View>
                <View style={styles.viewInput}>
                    <Text>Senha</Text>
                    <TextInput style={styles.input}></TextInput>
                </View>
                <View style={styles.viewInput}>
                    <Text>Data de nascimento</Text>
                    <TextInput style={styles.input}></TextInput>
                </View>
                <View style={styles.navButtonsView}>
                    <TouchableOpacity 
                    style={styles.entrar}
                    onPress={()=>{
                        setVisible(true)
                    }}
                    >
                        <Text style={{color: "white", fontSize: 15, fontWeight: "bold"}}>Criar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.link}>Não possuo conta</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    body: {
        alignItems: "center", 
        margin: 0,
        height: "100%"
    },
    viewInput: {
        width: "100%",
        marginVertical: 10
    },
    input: {
        backgroundColor: "#B8B8B8",
        fontSize: 15,
        borderRadius: 10,
        height: 35
    },
    inputsView: {
        backgroundColor: "white",
        width: "100%",
        height: "60%",
        zIndex: 2,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        padding: 10,
        position: "absolute",
        bottom: 0,
        paddingHorizontal: 40,
        alignItems: "center"
    },
    navButtonsView: {
        alignItems: "center",
        marginTop: 30
    },
    entrar: {
        backgroundColor: "#266B0E",
        padding: 7,
        borderRadius: 10,
        width: 150,
        alignItems: "center"
    },
    link: {
        marginTop: 7,
        color: "#266B0E",
        textDecorationLine: "underline",
        textDecorationColor: "#266B0E",
        fontWeight: "700"
    }
})