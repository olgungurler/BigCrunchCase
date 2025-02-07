import { View, FlatList } from "react-native";
import { useState } from "react";
import Post from "../post";
import CategorySwiper from "../categorySwiper";

export default function PostList() {
  const [selectedCategory, setSelectedCategory] = useState("Trending");

  const filteredPosts =
    selectedCategory === "All"
      ? postDatas
      : postDatas.filter((post) => post.category.includes(selectedCategory));
  return (
    <View>
      <CategorySwiper
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <FlatList
        data={filteredPosts}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <Post
            avatarImg={item.avatarImg}
            name={item.name}
            date={item.date}
            article={item.article}
            likeCount={item.likeCount}
            liked={item.liked}
            commentCount={item.commentCount}
          />
        )}
      />
    </View>
  );
}

const postDatas = [
  {
    id: "1",
    avatarImg: require("../../../assets/images/communityAvatar1.png"),
    name: "Coal Dingo",
    date: "Just Now",
    article:
      "Is there a therapy which can cure crossdressing & bdsm compulsion?",
    likeCount: 2,
    liked: true,
    commentCount: null,
    category: ["Trending", "Self Care"],
  },
  {
    id: "2",
    avatarImg: require("../../../assets/images/communityAvatar2.png"),
    name: "Pigeon Car",
    date: "3 hrs ago",
    article:
      "Is there a therapy which can cure crossdressing & bdsm compulsion?",
    likeCount: 12,
    liked: false,
    commentCount: 2,
    category: ["Trending", "Self Care"],
  },
  {
    id: "3",
    avatarImg: require("../../../assets/images/communityAvatar1.png"),
    name: "Pigeon Car",
    date: "1 hrs ago",
    article:
      "Is there a therapy which can cure crossdressing & bdsm compulsion?",
    likeCount: 12,
    liked: false,
    commentCount: 2,
    category: ["Trending", "Relationship"],
  },
  {
    id: "4",
    avatarImg: require("../../../assets/images/communityAvatar3.png"),
    name: "Pigeon Car",
    date: "2 min ago",
    article:
      "Is there a therapy which can cure crossdressing & bdsm compulsion?",
    likeCount: 12,
    liked: false,
    commentCount: 2,
    category: ["Trending", "Relationship"],
  },
  {
    id: "5",
    avatarImg: require("../../../assets/images/communityAvatar4.png"),
    name: "Pigeon Car",
    date: "3 hrs ago",
    article:
      "Is there a therapy which can cure crossdressing & bdsm compulsion?",
    likeCount: 12,
    liked: false,
    commentCount: 2,
    category: ["Trending", "Self Care2"],
  },
];
