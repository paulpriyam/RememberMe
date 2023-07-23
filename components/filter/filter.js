import { View, TouchableOpacity ,Text, FlatList} from "react-native";
import styles from './filter.style'
import { useState } from "react";
import { SIZES } from "../../constants";

const filters=["All","Places","Food","Reading","Important"]

const Filter = () => {

    const [activeFilter, setActiveFilter] = useState(filters[0]);
    return (
      <View style={styles.container}>
        <FlatList
          data={filters}
          horizontal
          keyExtractor={item => item}
          contentContainerStyle={{columnGap:SIZES.small}}
          renderItem={({ item }) => (
              <TouchableOpacity
                  onPress={() => {
                      setActiveFilter(item)
                  }}
                  style={styles.tab(activeFilter, item)}>
                  <Text style={ styles.tabText(activeFilter,item)}>{ item}</Text>
              </TouchableOpacity>
              
    )}
        />
      </View>
    );
}
export default Filter;
