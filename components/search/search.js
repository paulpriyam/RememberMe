import { View,TextInput,TouchableOpacity, Image  } from "react-native";

import styles from './search.style'
import icons from "../../constants/icons";
const Search = () => {


    return (
      <View style={styles.container}>
            <View style={ styles.searchWrapper}>
          <TextInput
            style={styles.searchText}
            placeholder="What are you looking for"
          />
        </View>

        <TouchableOpacity style={styles.searchBtnContainer}>
          <Image source={icons.search} style={styles.searchBtnImage} />
        </TouchableOpacity>
      </View>
    );
}

export default Search;
