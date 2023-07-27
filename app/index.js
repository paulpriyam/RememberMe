import { Stack } from "expo-router";
import { React } from "react";
import { SafeAreaView, Text, ScrollView, View, TouchableOpacity, Image } from "react-native";
import { COLOR, SIZES, ICONS } from "../constants";
import { useRouter } from "expo-router";

import { Notes, Search, Filter, NoteList } from "../components";

import styles from '../components/noteList/NoteList.style'

export default function Home() {
    const router = useRouter();

    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: COLOR.background,
          padding: SIZES.medium,
        }}
      >
        <Stack.Screen
          options={{
            headerTitle: "RememberMe",
            headerTitleAlign: "center",
            headerBackVisible: false,
          }}
        />

        <ScrollView showsVerticalScrollIndicator={false}>
          <Text
            style={{
              fontSize: SIZES.xLarge,
              fontWeight: "600",
            }}
          >
            Welcome Priyam
          </Text>
          <Text
            style={{
              fontSize: SIZES.medium,
              fontWeight: "400",
            }}
          >
            Your Second Brain is Here..
          </Text>
          <Search />
          <Filter />
          <NoteList />
        </ScrollView>
        <View style={styles.addNoteStyle}>
          <TouchableOpacity
                    style={styles.addNoteContainer}
                    onPress={() => {
                        router.push('/noteDetail/noteDetail')
                    }}
                >
            <Image source={ICONS.add} style={styles.addNoteImage} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
}
