import React, { useImperativeHandle, useRef, forwardRef, useState } from 'react'
import { View, Text, Button, Modal, StyleSheet, TextInput } from 'react-native';

export const ModalCriarMarcador = forwardRef((props, ref) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [titleInput, setTitleInput] = useState('');
    const [descriptionInput, setDescriptionInput] = useState('');
    const [currentDateFromCalendar, setCurrentDateFromCalendar] = useState(new Date())

    const handle = () => {

        const newTask = {
            title: titleInput,
            description: descriptionInput,
            date: currentDateFromCalendar,
            isChecked: false
        };

        props.handleNovaTask(newTask)

        setTitleInput('');
        setDescriptionInput('');
        setModalVisible(false);
        setCurrentDateFromCalendar(null)
    };

    useImperativeHandle(ref, () => ({
        open: (dateFromCalendar) => {
            setCurrentDateFromCalendar(new Date(dateFromCalendar.timestamp))
            setModalVisible(true);
        },
        close: () => {
            setModalVisible(false);
        },
    }));

    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.title}>Agendar nova Task!</Text>
                        <TextInput
                            placeholder={"Nome da task"}
                            style={styles.input}
                            value={titleInput}
                            onChangeText={setTitleInput}
                        />
                        <TextInput
                            placeholder={"Descrição"}
                            style={styles.input}
                            value={descriptionInput}
                            onChangeText={setDescriptionInput}
                        />
                        <Button title="Criar" onPress={handle} />
                    </View>
                </View>
            </Modal>
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '90%',
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    title: {
        fontSize: 20,
        marginBottom: 15,
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: "#77aefb",
        padding: 10,
        width: "90%",
        borderRadius: 3,
        margin: 10
    }
});