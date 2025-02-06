import { StyleSheet } from "react-native";

const CardStyles = StyleSheet.create({
  container: (color, borderWidth) => ({
    position: "relative",
    marginBottom: 26,
    backgroundColor: color,
    borderRadius: 16,
    padding: 24,
    alignItems: "flex-start",
    justifyContent: "center",
    overflow: "hidden",
    borderWidth: borderWidth,
    borderColor: "#F4F4F4",
  }),
  svgContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
  }
});

export default CardStyles;
