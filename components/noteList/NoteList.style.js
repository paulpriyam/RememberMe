import { StyleSheet } from "react-native";
import { COLOR, SIZES } from "../../constants";

const styles = StyleSheet.create(
    {
        container: {
            marginTop: SIZES.medium,
        },
        addNoteStyle: {
            position: "absolute",
            bottom: 0,
            right: 0,
            marginEnd: SIZES.medium,
            marginBottom:SIZES.medium
        },
        addNoteContainer: {
            width: 60,
            height: 60,
            borderRadius: SIZES.small,
            backgroundColor: COLOR.white,
            justifyContent: "center",
            alignItems:"center",
        },
        addNoteImage: {
            width: "60%",
            height: "60%",
        }
    }
)

export default styles;