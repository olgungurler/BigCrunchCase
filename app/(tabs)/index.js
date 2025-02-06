import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Swiper } from "../../components";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.welcomeMesageTitle}>
          <Text style={styles.welcomeMessageText}>Good Afternoon,</Text>
          <Text style={[styles.welcomeMessageText, styles.bold]}>Sarina!</Text>
        </View>
        <Swiper />
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
  bold: {
    fontWeight: "bold",
  },
  welcomeMesageTitle: {
    paddingBottom: 26,
  },
  welcomeMessageText: {
    fontSize: 26,
    fontWeight: "regular",
    fontFamily: "Epelogue",
    lineHeight: 32,
  },
});
