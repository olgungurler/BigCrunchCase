import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.welcomeMesageTitle}>
        <Text style={styles.welcomeMessageText}>Good Afternoon,</Text>
        <Text style={[styles.welcomeMessageText, styles.bold]}>Sarina!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FBFBFB",
  },
  bold: {
    fontWeight: "bold",
  },
  welcomeMesageTitle: {
    paddingHorizontal: 5,
    paddingVertical: 20,
  },
  welcomeMessageText: {
    fontSize: 26,
    fontWeight: "regular",
    fontFamily: "Epelogue",
    lineHeight: 32,
  },
});
