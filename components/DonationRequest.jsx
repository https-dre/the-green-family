import { Text, View, Image, StyleSheet } from "react-native";

export const DonationRequest = ({time, content = [], sender = ""}) => {
    const contentElements = []
    content.forEach((atr)=>{
        contentElements.push(
            <Text style={styles.atrText}>{atr}</Text>
        )
    })
    
    return (
        <View style={styles.mainView}>
            <View style={styles.headerView}>
                <Image style={styles.perfilImage} source={require("../assets/examples/3d_avatar_12.jpg")}/>
                <View>
                    <View style={styles.headerInfo}>
                        <Text style={styles.senderText}>{sender}</Text>
                        <Text style={styles.timeText}>{time}</Text>
                    </View>
                    <Text>Solicitação de doação</Text>
                </View>
            </View>
            <View style={StyleSheet.contentView}>
                {contentElements}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        backgroundColor: "white",
        borderRadius: 20,
        paddingTop: 0,
        width: 310,
        alignItems: "center",
        paddingBottom: 10
    },
    atrText: {
        marginTop: 6
    },
    perfilImage: {
        marginRight: 5
    },
    headerView: {
        flexDirection: "row",
        backgroundColor: "#83C672",
        alignItems: "center",
        width: "100%",
        borderRadius: 20,
        borderTopLeftRadius: 0,
        paddingLeft: 10,
        height: 50
    },
    contentView: {
        width: "100%",
        justifyContent: "flex-start",
    },
    headerInfo: {
        flexDirection: "row",
        alignItems: "center"
    },
    senderText: {
        color: "white",
        marginRight: 7
    },
    timeText: {
        color: "white",
        fontSize: 8
    }
})