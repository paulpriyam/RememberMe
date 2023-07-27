import { View, Image, TouchableOpacity } from "react-native";
import styles from './ScreenHeaderBtn.style'

const ScreenHeaderBtn = ({ iconUrl,onHandlePress}) => {
    return (
        <TouchableOpacity
            style={styles.btnContainer}
            onPress={onHandlePress}>
            <Image
                style={ styles.btn}
                source={iconUrl} />
            
        </TouchableOpacity>
    )
}

export default ScreenHeaderBtn;