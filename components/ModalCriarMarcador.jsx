import React, { useImperativeHandle, forwardRef, useState, useCallback, useMemo } from 'react';
import {
    View, Text, Button, Modal, StyleSheet,
    TextInput, InteractionManager, TouchableOpacity
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
        InteractionManager.runAfterInteractions(() => {
            const newTask = {
                title: formState.title,
                description: formState.description,
                date: formState.currentDate,
                isChecked: false
            };

            props.handleNovaTask(newTask);

            /* Resetar inputs e fechar o modal */
            setFormState({
                title: '',
                description: '',
                currentDate: new Date()
            });
            setModalVisible(false);
        });
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

    const handleCancel = useCallback(() => {
        setModalVisible(false);
        setTimeout(() => {
            setFormState({
                title: '',
                description: '',
                currentDate: new Date()
            });
        }, 300); /* Espera um tempo antes de redefinir o estado */
    }, []);
    

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
                    <View style={{ width: "100%", margin: "auto" }}>
                        <Text style={{fontWeight: "bold", color: "#6c6c6c"}}>Nome Da Tarefa!</Text>
                        <TextInput
                            style={styles.input}
                            value={formState.title}
                            onChangeText={(text) => handleInputChange('title', text)}
                        />
                        <Text style={{fontWeight: "bold", color: "#6c6c6c"}}>Descrição</Text>
                        <TextInput
                            style={styles.input}
                            value={formState.description}
                            onChangeText={(text) => handleInputChange('description', text)}
                        />
                        <Text style={{fontWeight: "bold", color: "#6c6c6c"}}>Data: {formState.currentDate.toLocaleDateString()}</Text>
                    </View>

                    <TouchableOpacity style={styles.button} onPress={handleCreateTask}>
                        <Text style={{color: "white", fontWeight: "bold"}}>Criar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, {backgroundColor: "transparent", marginBottom: 0}]} onPress={handleCancel}>
                        <Text style={{color: "#266B0E", fontWeight: "bold"}}>Cancelar</Text>
                    </TouchableOpacity>
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
        fontWeight: "bold", 
        color: "#535353"
    },
    input: {
        borderWidth: 1,
        backgroundColor: "#F7F7F7",
        borderColor: "#83C672",
        padding: 10,
        width: "100%",
        borderRadius: 3,
        marginBottom: 5
    },
    button: {
        backgroundColor: "#266B0E",
        width: "100%",
        alignItems: "center",
        marginVertical: 10,
        padding: 10,
        borderRadius: 5
    },
});
