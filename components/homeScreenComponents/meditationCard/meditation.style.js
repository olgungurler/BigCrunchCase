import { StyleSheet } from "react-native";

const MedidationCardStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
  },
  leftSideWrapper: {
    width: "65%",
  },
  title: {
    fontSize: 22,
    fontFamily: "Epelogue",
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 8,
  },
  subTitle: {
    fontSize: 12,
    fontFamily: "Rubik",
    fontWeight: "regular",
    color: "#FFF",
    marginBottom: 8,
  },
  buyMoreBtn: {
    flexDirection: "row",
    alignItems: "center",
  },
  buyMoreText: {
    fontSize: 16,
    fontFamily: "Epelogue",
    fontWeight: "bold",
    color: "#FFF",
    marginRight: 8,
  },
  buyMoreArrowIcon: {
    marginTop: 4,
  },
  meditationIcon: {
    paddingLeft: 20,
    paddingTop: 10,
  },
});

export default MedidationCardStyles;
