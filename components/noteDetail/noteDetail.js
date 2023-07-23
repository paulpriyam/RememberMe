import { View, TextInput } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import styles from './noteDetail.style'

const NoteDetails = () => {

    const [title, setTitle] = useState("");
    const [note, setNote] = useState("");
    return (
        <View style={styles.container}>
            <View style={ styles.titleContainer}>
                <TextInput
                    style={styles.titleContainer}
                    placeholder="Title"
                    value={title}
                    onChangeText={setTitle(title)}
                />
            </View>
            <View style={ styles.noteContainer}>
                <TextInput style={styles.titleText}
                    placeholder="Note.."
                    value={note}
                    onChangeText={setNote(note)} />
            </View>
        </View>
    )
}

export default NoteDetails;