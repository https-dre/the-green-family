import { SafeAreaView, Text, StyleSheet, View, TouchableWithoutFeedback, Keyboard, ScrollView } from "react-native";
import { useState, useRef, useCallback } from "react";

import { CalendarCarousel } from "../components/CalendarCarousel";
import { Marcador } from "../components/Marcador";
import { ModalCriarMarcador } from "../components/ModalCriarMarcador";

// Ops: temos que otimizar o click do calendário, o modal para criar marcador e os marcadores!

export const CalendarScreen = () => {
    const modalRef = useRef();
    const [marcadores, setMarcadores] = useState([]);

    const openModal = useCallback((dateFromCalendar) => {
        if (modalRef.current) {
            modalRef.current.open(dateFromCalendar);
        }
    }, []);

    const calendarClick = useCallback((dateFromCalendar) => {
        console.log(dateFromCalendar)
        openModal(dateFromCalendar)
    }, [openModal]);

    const adicionarTask = useCallback((taskData) => {
        console.log(taskData)
        setMarcadores([...marcadores, <Marcador
            title={taskData.title}
            data={taskData.date}
            description={taskData.description} isChecked={taskData.isChecked} />
        ])
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView>
                    <View>
                        <Text style={[styles.title, { marginVertical: 20 }]}>Calendário</Text>
                        <View>
                            <CalendarCarousel calendarClick={calendarClick} />
                        </View>
                    </View>
                    <View>
                        <Text style={styles.title}>Marcadores</Text>
                        <View style={{ marginVertical: 20, gap: 15 }}>
                            {marcadores}
                        </View>
                        <ModalCriarMarcador ref={modalRef} handleNovaTask={adicionarTask} />
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1
    },
    title: {
        fontSize: 25,
        color: "#343434",
        fontWeight: "bold",
        marginLeft: 20
    }
});
