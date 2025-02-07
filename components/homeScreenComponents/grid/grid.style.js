import { StyleSheet } from "react-native";

const GridStyles = StyleSheet.create({
  container: {
   gap: 15,
   marginBottom: 26,
  },
  btnWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 15,
  },
  btn:{
    flex: 1,
    backgroundColor: "#F4F3F1",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 16,
  },
  btnText: {
    marginLeft: 15,
    fontSize: 14,
    fontFamily: "EpilogueBold",
    color: "#573926",
  },
  quoteWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F4F3F1",
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  quoteText: {
    fontSize: 14,
    fontFamily: "Epelogue",
    fontWeight: "regular",
    color: "#707070",
    paddingRight: 10,
  }
});

export default GridStyles;
