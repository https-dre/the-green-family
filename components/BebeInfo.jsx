import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export const BebeInfo = ({ nomeBebe, idade }) => {
    return (
        <View>
            <Image style={styles.imageStyle} source={require("../assets/examples/bebe.jpg")} />
            <View style={styles.bebeInfo}>
                <View>
                    <Text style={[{ color: "white" }, styles.title]}>{nomeBebe}</Text>
                    <Text style={{ color: "white" }}>{idade}</Text>
                </View>

                <View>
                    <TouchableOpacity>
                        <Icon name="ellipsis-v" size={25} color={"gray"} />
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    bebeInfo: {
        position: "absolute",
        top: 20,            
        left: 20,           
        right: 20,          
        flexDirection: "row",
        justifyContent: "space-between",  
        alignItems: "flex-start",             
        zIndex: 1000,        

    },
    title: {
        fontSize: 35,
        fontWeight: 'bold'
    },
    imageStyle: {
        width: "100%",
        maxHeight: 200,
        borderTopEndRadius: 7,
        borderTopStartRadius: 7
    }
})