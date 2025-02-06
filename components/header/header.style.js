import { StyleSheet } from "react-native";

const HeaderStyles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 25,
    paddingVertical: 20,
    backgroundColor: "#FBFBFB",
  },
  avatarImg: {
    width: 35,
    height: 35,
    borderWidth: 4,
    borderRadius: 35 / 2,
    borderColor: "#F09E5478",
  },
  NatificationContainer: {
    position: "relative",
  },
  badge: {
    position: "absolute",
    top: -5,
    right: -10,
    backgroundColor: "#FE8235",
    width: 21,
    height: 21,
    borderRadius: 21 / 2,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "#FBFBFB",
    fontSize: 12,
    fontFamily: "Epelogue",
    fontWeight: "regular",
  },
});

export default HeaderStyles;
