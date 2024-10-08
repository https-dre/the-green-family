import { View, Text, Image, StyleSheet } from "react-native";

export const ReceivedMessage = ({sender, time, content, requirePerfil=require("../../assets/examples/3d_avatar_12.jpg"), style}) => {
    return (
        <View style={[styles.mainView, style]}>
            <View style={styles.perfilView}>
                <Image source={requirePerfil}/>
            </View>
            <View>
                <View style={styles.headerView}>
                    <Text style={styles.senderText}>{sender}</Text>
                    <Text style={styles.timeText}>{time}</Text>
                </View>
                <View style={styles.contentView}>
                    <Text>{content}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flexDirection :"row",
        width: 250
    },
    perfilView: {
        width: 50
    },
    headerView: {
        flexDirection: "row",
        alignItems: "center"
    },
    senderText: {
        marginRight: 5
    },
    timeText: {
        fontSize: 10,
        color: "#989898"
    },
    contentView: {
        backgroundColor: "white",
        padding: 10,
        borderRadius: 20,
        borderTopLeftRadius: 0,
        marginTop: 4
    }
})