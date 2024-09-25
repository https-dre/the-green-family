import { SafeAreaView, Text, StyleSheet } from "react-native";

export const Loading = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Loading Screen!</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})