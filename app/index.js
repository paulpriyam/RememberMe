import { Stack } from "expo-router";
import { React } from "react";
import { SafeAreaView, Text } from "react-native";
import { COLOR, SIZES } from "../constants";

import { Notes, Search, Filter } from "../components";
import { ScrollView } from "react-native-gesture-handler";


export default function Home() {
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: COLOR.background,
            padding:SIZES.medium
        }}>
            
                <Stack.Screen
                    options={{
                        headerTitle: "RememberMe",
                        headerTitleAlign: "center",
                        headerBackVisible: false,
                    }} />
                
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <Text style={{
                    fontSize: SIZES.xLarge,
                    fontWeight:"600"
                }}>Welcome Priyam</Text>
                <Text style={{
                    fontSize: SIZES.medium,
                    fontWeight:"400",
                }}>Your Second Brain is Here..</Text>
                <Search />
                <Filter/>
            </ScrollView>
     </SafeAreaView>
    )
}
