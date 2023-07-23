import { Stack } from "expo-router";
import { React } from "react";
import { View,Text, SafeAreaView } from "react-native";



export default function Home() {
    return (
        <SafeAreaView>
            <View>
                <Stack.Screen
                    options={{
                        headerTitle: "RememberMe",
                        headerTitleAlign: "center",
                        headerBackVisible: false,
                }}/>
            </View>
     </SafeAreaView>
    )
}
