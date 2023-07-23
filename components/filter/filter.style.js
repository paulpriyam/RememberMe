import { StyleSheet } from "react-native";
import { COLOR, SIZES } from "../../constants";

const styles = StyleSheet.create({
    container: {
        marginTop: SIZES.large,
        width: "100%",
    },
    tab: (activeFilter, filter) => ({
        paddingHorizontal: SIZES.medium,
        paddingVertical:SIZES.xSmall,
        borderRadius: SIZES.small,
        borderWidth: 1,
        backgroundColor:COLOR.white,
        borderColor: activeFilter === filter?COLOR.tertiary:COLOR.gray
    }),
    tabText: (activeFilter,filter) => ({
        color:activeFilter===filter?COLOR.tertiary:COLOR.gray
    })
})

export default styles;