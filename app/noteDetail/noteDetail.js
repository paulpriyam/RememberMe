import { View, TextInput } from "react-native";
import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import styles from './noteDetail.style'

const NoteDetails = () => {

    const [title, setTitle] = useState("");
    const [note, setNote] = useState("");
    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <Stack.Screen
          options={{
            headerTitle: "Take Note",
          }}
        />
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <TextInput
              style={styles.titleText}
              placeholder="Title"
              value={title}
              onChangeText={(text) => setTitle(text)}
            />
          </View>
          <View style={styles.noteContainer}>
            <TextInput
              style={styles.noteText}
              placeholder="Note.."
              value={note}
              multiline={true}
              onChangeText={(text) => setNote(text)}
            />
          </View>
        </View>
      </View>
    );
}

export default NoteDetails;