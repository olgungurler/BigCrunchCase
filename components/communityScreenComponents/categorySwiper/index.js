import { View, Text, ScrollView, Pressable, Dimensions } from "react-native";
import styles from "./categorySwiper.style";

export default function CategorySwiper({ selectedCategory, setSelectedCategory }) {
  const screenWidth = Dimensions.get("window").width;
  return (
    <View style={styles.container}>
      <ScrollView
        style={{ width: screenWidth }}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {categoryElements.map((element, index) => (
          <View
            key={index}
            style={styles.categoryWrapper(
              index + 1 === categoryElements.length
            )}
          >
            <Pressable
              style={[
                styles.categoryContainer,
                selectedCategory === element.title &&
                  styles.activeCategoryContainer,
              ]}
              onPress={() => setSelectedCategory(element.title)}
            >
              <Text
                style={[
                  styles.categoryTitle,
                  selectedCategory === element.title &&
                    styles.activeCategoryTitle,
                ]}
              >
                {element.title}
              </Text>
            </Pressable>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const categoryElements = [
  {
    title: "Trending",
  },
  {
    title: "Relationship",
  },
  {
    title: "Self Care",
  },
  {
    title: "Self Care2",
  },
];
