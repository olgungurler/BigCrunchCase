import { StyleSheet } from "react-native";

const PostCreateBtnStyles = StyleSheet.create({
  absoluteBtnWrapper: {
    position: "absolute",
    bottom: 25,
    right: 25,
  },
  absoluteBtnContainer: {
    width: 58,
    height: 58,
    backgroundColor: "#FE8235",
    borderRadius: 58 / 2,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#fe8235",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.62,
    elevation: 7,
  },
});

export default PostCreateBtnStyles;
