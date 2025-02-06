import { StyleSheet } from "react-native";

const UpComingSessionCardStyles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    fontFamily: "Epelogue",
    fontWeight: "bold",
    color: "#573926",
    marginBottom: 6,
  },
  subTitle: {
    fontSize: 12,
    fontFamily: "Rubik",
    fontWeight: "regular",
    color: "#573926",
    marginBottom: 6,
  },
  timeText: {
    fontSize: 12,
    fontFamily: "Rubik",
    fontWeight: "bold",
    color: "#573926",
    marginBottom: 10,
  },
  joinNowBtn: {
    flexDirection: "row",
    alignItems: "center",
  },
  joinNowText: {
    fontSize: 16,
    fontFamily: "Epelogue",
    fontWeight: "bold",
    color: "#FE8235",
    marginRight: 6,
  },
});

export default UpComingSessionCardStyles;
