import { SafeAreaView, Text, View, StyleSheet, ScrollView, TouchableWithoutFeedback, Keyboard } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

import { HomeIsland } from "../components/HomeIsland"
import { BebeInfo } from "../components/BebeInfo"

export function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <ScrollView style={[styles.container, { padding: 15 }]}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 15 }}>
                        <Icon name="moon-o" size={25} color="black" />
                        <Icon name="user-circle-o" size={30} color="black" />
                    </View>

                    <HomeIsland>
                        <BebeInfo nomeBebe="Gabriel" idade="1 ano, 5 meses" />
                    </HomeIsland>

                </ScrollView>
            </TouchableWithoutFeedback>

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    }
})
