import { StyleSheet } from "react-native";

const SessionBookingCardStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
  },
  leftSideWrapper: {
    width: "65%"
  },
  title: {
    fontSize: 22,
    fontFamily: "EpilogueExtraBold",
    color: "#573926",
    marginBottom: 8,
  },
  subTitle: {
    fontSize: 12,
    fontFamily: "Rubik",
    fontWeight: "regular",
    color: "#573926",
    marginBottom: 8,
  },
  bookNowBtn: {
    flexDirection: "row",
    alignItems: "center",
  },
  bookNowText: {
    fontSize: 16,
    fontFamily: "EpilogueBold",
    color: "#FE8235",
    marginRight: 4,
  },
  sessionIcon: {
    paddingLeft: 20,
    paddingTop: 10,
  }
});

export default SessionBookingCardStyles;
