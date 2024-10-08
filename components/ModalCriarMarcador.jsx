import React, { useImperativeHandle, forwardRef, useState, useCallback, useMemo } from 'react';
import {
    View, Text, Button, Modal, StyleSheet,
    TextInput, TouchableWithoutFeedback, Keyboard
} from 'react-native';

// Ops: tentei fazer assim para deixar otimizado

export const ModalCriarMarcador = forwardRef((props, ref) => {
    // Usando um único estado para gerenciar inputs
    const [formState, setFormState] = useState({
        title: '',
        description: '',
        currentDate: new Date()
    });

    const [modalVisible, setModalVisible] = useState(false);

    // Função para atualizar o estado do formulário de forma eficiente
    const handleInputChange = (field, value) => {
        setFormState((prevState) => ({
            ...prevState,
            [field]: value
        }));
    };

    const handleCreateTask = useCallback(() => {
        const newTask = {
            title: formState.title,
            description: formState.description,
            date: formState.currentDate,
            isChecked: false
        };

        props.handleNovaTask(newTask);

        // Resetar inputs e fechar o modal
        setFormState({
            title: '',
            description: '',
            currentDate: new Date()
        });
        setModalVisible(false);
    }, [formState, props]);

    // Memoizar funções de abertura e fechamento do modal para evitar recriações
    useImperativeHandle(ref, () => ({
        open: (dateFromCalendar) => {
            setFormState((prevState) => ({
                ...prevState,
                currentDate: dateFromCalendar
            }));
            setModalVisible(true);
        },
        close: () => {
            setModalVisible(false);
        }
    }), []);

    const handleCancel = () => {
        setFormState({
            title: '',
            description: '',
            currentDate: new Date()
        });
        setModalVisible(false);
    }

    // Usar useMemo para o conteúdo do modal, evitando renderizações desnecessárias
    const modalContent = useMemo(() => (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.title}>Agendar nova Tarefa!</Text>
                    <View style={{width: "100%"}}>
                        <Text>Nome Da Tarefa!</Text>
                        <TextInput
                            style={styles.input}
                            value={formState.title}
                            onChangeText={(text) => handleInputChange('title', text)}
                        />
                        <Text>Descrição</Text>
                        <TextInput
                            style={styles.input}
                            value={formState.description}
                            onChangeText={(text) => handleInputChange('description', text)}
                        />
                        <Text>Data: {formState.currentDate.toLocaleDateString()}</Text>
                    </View>

                    <Button title="Criar" onPress={handleCreateTask} />
                    <Button title="Cancel" onPress={handleCancel} />
                </View>
            </View>
        </Modal>
    ), [formState, modalVisible, handleCreateTask]);

    return <View>{modalContent}</View>;
});

const styles = StyleSheet.create({
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
        margin: 10,
    }
});
