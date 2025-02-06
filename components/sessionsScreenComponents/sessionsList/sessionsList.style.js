import { StyleSheet } from "react-native";

const SessionsListStyles = StyleSheet.create({
  container: {},
  listHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  listHeaderLeftBtn: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "regular",
    fontFamily: "Epelogue",
    color: "#371B34",
    marginRight: 6,
  },
  listContainer: {
    flex: 1,
  },
  userInfoWrapper: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderColor: "#D9D8D84D",
  },
  userImg: {
    width: 35,
    height: 35,
    borderRadius: 35 / 2,
    borderWidth: 2,
    borderColor: "#F09E5478",
  },
  userInfo:{
    marginLeft: 17,
  },
  userName:{
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: "Rubik",
    color: "#573926"
  },
  userDegree: {
    fontSize: 12,
    fontWeight: "regular",
    fontFamily: "Rubik",
    color: "#573926"
  },
  dateInfoWrapper: {
    marginTop: 12,
    flexDirection: "row",
    gap: 15,
  },
  dateInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  dateText: {
    marginLeft: 6,
    fontSize: 12,
    fontWeight: "regular",
    fontFamily: "Rubik",
    color: "#707070"
  },
  btnWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 14,
    gap: 37
  },
  coloredBtn: {
    backgroundColor: "#FE8235",
    borderRadius: 9,
    width: 117,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  coloredBtnText: {
    fontSize: 14,
    lineHeight: 30,
    fontWeight: "bold",
    fontFamily: "Epelogue",
    color: "#FBFBFB",
  },
  btnText: {
    fontSize: 14,
    lineHeight: 30,
    fontWeight: "bold",
    fontFamily: "Epelogue",
    color: "#FE8235",
  }
});

export default SessionsListStyles;
