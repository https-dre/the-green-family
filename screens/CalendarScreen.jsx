import { SafeAreaView, Text, StyleSheet, View } from "react-native";
import { CalendarCarousel } from "../components/CalendarCarousel";
import { useState, useEffect, useRef } from "react";
import { Marcador } from "../components/Marcador";
import { ModalCriarMarcador } from "../components/ModalCriarMarcador";

export const CalendarScreen = () => {
    const modalRef = useRef();
    const [marcadores, setMarcadores] = useState([]);
    
    const openModal = (dateFromCalendar) => {
        if (modalRef.current) {
            modalRef.current.open(dateFromCalendar);
        }
    };

    const calendarClick = (dateFromCalendar) => {
        console.log(dateFromCalendar)
        openModal(dateFromCalendar)
    };

    const adicionarTask = (taskData) => {
        console.log(taskData)
        setMarcadores([...marcadores, <Marcador 
            title={taskData.title} 
            data={taskData.date} 
            description={taskData.description} isChecked={taskData.isChecked}/>
        ])
    }

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={[styles.title, { marginVertical: 20 }]}>Calendário</Text>
                <View>
                    <CalendarCarousel calendarClick={calendarClick}/>
                </View>
            </View>
            <View>
                <Text style={styles.title}>Marcadores</Text>
                <View style={{ marginLeft: 20 }}>
                    {marcadores}
                </View>
                <ModalCriarMarcador ref={modalRef} handleNovaTask={adicionarTask}/>
            </View>
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
