import { ScrollView, View, Text, StyleSheet } from "react-native";
import { PostCreateBtn, PostList } from "../../components";

export default function CommunityScreen() {
  return (
    <View style={styles.parentContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        <View style={styles.container}>
          <Text style={styles.pageTitle}>Wellness Hub</Text>
          <PostList />
        </View>
      </ScrollView>
      <PostCreateBtn />
    </View>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    position: "relative",
  },
  scrollContainer: {
    flexGrow: 1,
    position: "relative",
    backgroundColor: "#FBFBFB",
  },
  container: {
    flex: 1,
    position: "relative",
    paddingHorizontal: 25,
  },
  pageTitle: {
    fontSize: 18,
    fontFamily: "EpilogueSemiBold",
    lineHeight: 24,
    color: "#371B34",
  },
});
