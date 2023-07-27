import { StyleSheet } from "react-native";
import { COLOR, SIZES } from "../../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.background,
        flexDirection: "column",
        paddingHorizontal: SIZES.medium,
    },
    titleContainer: {
        width: "100%",
        marginTop: SIZES.large,
        
    },
    titleText: {
        fontSize: SIZES.xxLarge,
        color: COLOR.gray,
        
    },
    noteContainer: {
        width: "100%",
        height: "100%",
        marginTop: SIZES.small,
        marginBottom:SIZES.xLarge,
        
    },
    noteText: {
        fontSize: SIZES.large,
        color: COLOR.gray,
    },
    dateText: {
        fontSize:SIZES.xSmall
    }
});

export default styles;