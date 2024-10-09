import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export const ButtonWithIcon = ({icon, text, iconSize = 20, fontColor = "black", ...rest}) => {
    return (
        <TouchableOpacity {...rest} style={[styles.button, rest.style]} >
            <Text style={{color: fontColor}}>{text}</Text>
            <Icon name={icon} size={iconSize} color={fontColor}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        flexDirection: "row",
        gap: 5,
        maxWidth: 100,
        padding: 7,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10
    }
})