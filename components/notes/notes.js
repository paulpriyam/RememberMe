import { View, FlatList, TouchableOpacity } from "react-native";

import styles from './notes.style'

const Notes = ({noteText, onHandlePress}) => {
    return (
        <View>
            <TouchableOpacity
                onPress={onHandlePress}
                style={styles.noteContainer}>
                <Text style={styles.noteText}>{ noteText}</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Notes;