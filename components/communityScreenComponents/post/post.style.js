import { StyleSheet } from "react-native";

const PostStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 17,
    borderBottomWidth: 1,
    borderColor: "#D9D8D84D",
    paddingBottom: 16,
    marginBottom: 16,
  },
  postAvatar: {
    height: 35,
    width: 35,
    borderRadius: 35 / 2,
  },
  postDetailsWrapper: {
    flexDirection: "column",
    flex: 1,
  },
  postNameAndDate: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  postName: {
    fontSize: 14,
    fontFamily: "Rubik",
    fontWeight: "bold",
    color: "#573926",
  },
  postDate: {
    fontSize: 12,
    fontFamily: "Rubik",
    fontWeight: "regular",
    color: "#707070",
    marginTop: 2,
  },
  postArticleWrapper: {
    marginBottom: 16,
  },
  postArticleText: {
    fontSize: 13,
    fontFamily: "Rubik",
    fontWeight: "regular",
    color: "#573926",
  },
  postBtnsWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  postLikeAndCommentWrapper: {
    flexDirection: "row",
    gap: 35,
  },
  postLikeWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  postLikeCount: {
    fontSize: 13,
    fontFamily: "Rubik",
    fontWeight: "regular",
    color: "#707070",
    lineHeight: 20,
  }
});

export default PostStyles;
