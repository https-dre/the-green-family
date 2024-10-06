import { View, Text, Image, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

export const GroupsHeader = ({imagePath, name, count=0}) => {
    const navigation = useNavigation()
    return (
        <View style={styles.mainView}>
            <View style={styles.leftView}>
                <Icon size={20} name="arrow-left" onPress={()=>{navigation.goBack()}}/>
                <Image style={styles.groupPhoto} source={require("../assets/examples/3d_avatar_12.jpg")}/>
                <View style={styles.infoView}>
                    <Text style={styles.groupName}>{name}</Text>
                    <Text>{count}</Text>
                </View>
            </View>
            <View style={styles.rightView}>
                <Icon name="ellipsis-h" size={20}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        paddingTop: 20,
        flexDirection: "row",
        backgroundColor: "white",
        alignItems: "center",
        paddingBottom: 10
    },
    groupName: {
        fontSize: 20
    },
    infoView: {
        marginLeft: 10
    },
    leftView: {
        flexDirection: "row",
        width: "70%",
        alignItems: "center",
        paddingLeft: 10
    },
    rightView: {
        width: "30%",
        alignItems: "flex-end",
        paddingRight: 10
    },
    groupPhoto: {
        marginLeft: 10
    }
})