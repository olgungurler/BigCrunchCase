import { View, ScrollView, StyleSheet } from "react-native";
import { SessionsList, UpComingSessionCard } from "../../components";

export default function SessionsScreen() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.scrollContainer}
    >
      <View style={styles.container}>
        <UpComingSessionCard />
        <SessionsList />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: "#FBFBFB",
  },
  container: {
    flex: 1,
    paddingHorizontal: 25,
  },
});
