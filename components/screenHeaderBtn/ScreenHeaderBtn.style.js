import { StyleSheet } from "react-native";
import { SIZES } from "../../constants";
const styles = StyleSheet.create({
    btnContainer: {
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: SIZES.xSmall / 1.25,
    },
    btn: {
        width: "80%",
        height:"80%",
    }
})

export default styles;