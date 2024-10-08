import { View, Text, Image, StyleSheet } from "react-native";

export const SendMessage = ({sender, time, content, requirePerfil=require("../../assets/examples/3d_avatar_12.jpg"), style}) => {
    return (
        <View style={styles.positionView}>
            <View style={[styles.mainView, style]}>
                <View style={styles.perfilView}>
                    <Image source={requirePerfil}/>
                </View>
                <View style={styles.rightView}>
                    <View style={styles.headerView}>
                        <Text style={styles.senderText}>{sender}</Text>
                        <Text style={styles.timeText}>{time}</Text>
                    </View>
                    <View style={styles.contentView}>
                        <Text>{content}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    positionView: {
        width: "100%",
        flexDirection: "row-reverse",
        padding: 0
    },
    mainView: {
        flexDirection: "row-reverse",
        width: 250
    },
    perfilView: {
        width: 50, 
        marginRight: -10,
        marginLeft: 10
    },
    headerView: {
        flexDirection: "row-reverse",
        alignItems: "center"
    },
    senderText: {
        marginLeft: 5
    },
    timeText: {
        fontSize: 10,
        color: "#989898"
    },
    contentView: {
        backgroundColor: "white",
        padding: 10,
        borderRadius: 20,
        borderTopRightRadius: 0,
        marginTop: 4
    }
})