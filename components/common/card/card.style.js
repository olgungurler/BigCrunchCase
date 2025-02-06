import { StyleSheet } from "react-native";

const CardStyles = StyleSheet.create({
  container: (color) => ({
    position: "relative",
    marginVertical: 24,
    backgroundColor: color,
    borderRadius: 16,
    padding: 24,
    alignItems: "flex-start",
    justifyContent: "center",
    overflow: "hidden",
  }),
  svgContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
  }
});

export default CardStyles;
