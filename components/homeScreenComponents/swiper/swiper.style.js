import { StyleSheet } from "react-native";

const SwiperStyles = StyleSheet.create({
  container: {
    position: "relative",
    marginBottom: 26,
  },
  title: {
    fontSize: 16,
    fontFamily: "Epelogue",
    fontWeight: "regular",
    color: "#371B34",
  },
  scrollContainer: {
    paddingTop: 20,
    flexDirection: "row",
  },
  fellingWrapper: (isEnd) => ({
    alignItems: "center",
    paddingRight: isEnd ? 25 : 0,
    marginRight: 24,
  }),
  fellingIconWrapper: {
    width: 60,
    height: 62,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
  },
  fellingTitle: {
    paddingTop: 10,
    fontSize: 12,
    fontFamily: "Epelogue",
    fontWeight: "regular",
    color: "#828282",
  },
});

export default SwiperStyles;
