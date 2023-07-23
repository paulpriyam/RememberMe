import { View, TouchableOpacity, Image } from "react-native";
import { Stack } from "expo-router";
import { ICONS, SIZES, icons } from "../../constants";

const category = [];

const NoteDetails = () => {
    return (
        <View style={ 
            {
                flex: 1,
                padding:SIZES.medium,
            }
        }>
            <Stack.Screen
                options={{
                    headerBackVisible: false,
                    headerLeft: () => {
                        return (
                            <TouchableOpacity onPress={() => {
                                
                            }}>
                                <Image source={ICONS.left} />
                                
                            </TouchableOpacity>
                        )
                    }
            }}/>

        </View>
    )
}

export default NoteDetails;