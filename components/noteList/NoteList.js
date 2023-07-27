import { FlatList, View, Image } from "react-native";
import styles from './NoteList.style'
import Notes from "../notes/notes";
import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ICONS, SIZES } from "../../constants";

const NoteList = ({ notes }) => {
    const router = useRouter();
    return (
      <View style={styles.container}>
        <FlatList
          data={notes}
          renderItem={(item) => (
            <Notes
              noteText={item}
              onHandlePress={router.push(`/note_details/${item.id}`)}
            />
          )}
        />
      </View>
    );
}
export default NoteList;