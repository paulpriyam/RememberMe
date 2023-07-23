import { StyleSheet } from "react-native";

import { COLOR, SIZES } from "../../constants";

const styles = StyleSheet.create({
    container: {
        marginTop: SIZES.xLarge,
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        
    },
    searchWrapper: {
        backgroundColor: COLOR.white,
        borderTopLeftRadius: SIZES.xSmall,
        borderBottomLeftRadius:SIZES.xSmall,
        justifyContent: "center",
        alignItems: "flex-start",
        paddingHorizontal:SIZES.medium,
        flex: 1,
        height:"100%"
    
    },
    searchText: {
        fontSize: SIZES.medium,
    },
    searchBtnContainer: {
        width: 60,
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLOR.tertiary,
        borderTopRightRadius: SIZES.xSmall,
        borderBottomRightRadius:SIZES.xSmall,
        
    },
    searchBtnImage: {
        width: "50%",
        height: "50%",
        tintColor:COLOR.white,
    }

})
export default styles;