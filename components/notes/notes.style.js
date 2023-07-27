import { StyleSheet } from "react-native";
import { COLOR, SIZES } from "../../constants";

const styles = StyleSheet.create({
    noteContainer: {
        width: "40%",
        height: 200,
        borderRadius: SIZES.xSmall,
        borderColor: COLOR.tertiary,
       
    },
    noteText: {
        fontSize: SIZES.small,
        color: COLOR.white,
    }
})
export default styles;