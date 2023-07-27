import { View, TouchableOpacity, Image } from "react-native";
import { Stack } from "expo-router";
import { ICONS, SIZES } from "../../constants";
import  { HeaderBtn, NoteDetailPage } from "../../components";
import { useRouter } from "expo-router";
const category = [];

const NoteDetails = () => {
    const router = useRouter();
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
                        return <HeaderBtn iconUrl={ICONS.left} onHandlePress={() => {
                            router.back();
                        } }/>
                    }
            }}/>
            <NoteDetailPage />
            
        </View>
    )
}

export default NoteDetails;