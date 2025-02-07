import { StyleSheet } from "react-native";

const CategorySwiperStyles = StyleSheet.create({
  container: {
    position: "relative",
    marginBottom: 26,
  },
  scrollContainer: {
    paddingTop: 20,
    flexDirection: "row",
  },
  categoryWrapper: (isEnd) => ({
    alignItems: "center",
    paddingRight: isEnd ? 25 : 0,
    marginRight: isEnd ? 25 : 12,
  }),
  categoryContainer: {
    backgroundColor: "#F4F2F1",
    borderRadius: 9,
  },
  activeCategoryContainer: {
    backgroundColor: "#FE8235",
    borderRadius: 9,
  },
  categoryTitle: {
    fontSize: 14,
    fontFamily: "EpilogueSemiBold",
    lineHeight: 30,
    color: "#8A8A8A",
    paddingHorizontal: 15,
    paddingVertical: 4,
  },
  activeCategoryTitle: {
    fontSize: 14,
    fontFamily: "EpilogueSemiBold",
    lineHeight: 30,
    color: "#FBFBFB",
    paddingHorizontal: 15,
    paddingVertical: 4,
  },
});

export default CategorySwiperStyles;
