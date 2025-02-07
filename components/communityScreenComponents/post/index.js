import { Pressable, View, Text, Image } from "react-native";
import { useState } from "react";
import styles from "./post.style";
import { CommentIcon, LikeIcon, ShareIcon } from "../../../assets/icons";

export default function Post({ avatarImg, name, date, article, likeCount, liked, commentCount }) {
  const [currentLikeCount, setCurrentLikeCount] = useState(likeCount);
  const [isLiked, setIsLiked] = useState(liked);

  const handleLike = () => {
    setIsLiked((prevLiked) => {
      const newLikedState = !prevLiked;
      setCurrentLikeCount((prevCount) => (newLikedState ? prevCount + 1 : prevCount - 1));
      return newLikedState;
    });
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.postAvatar}
        source={avatarImg}
      />
      <View style={styles.postDetailsWrapper}>
        <View style={styles.postNameAndDate}>
          <Text style={styles.postName}>{name}</Text>
          <Text style={styles.postDate}> • {date}</Text>
        </View>
        <View style={styles.postArticleWrapper}>
          <Text style={styles.postArticleText}>
            {article}
          </Text>
        </View>
        <View style={styles.postBtnsWrapper}>
          <View style={styles.postLikeAndCommentWrapper}>
            <Pressable style={styles.postLikeWrapper} onPress={handleLike}>
              <LikeIcon color={isLiked ? "#FE8235" : "#D6CCC6"} />
              <Text style={styles.postLikeCount}>{currentLikeCount}</Text>
            </Pressable>
            <Pressable style={styles.postLikeWrapper}>
              <CommentIcon />
              <Text style={styles.postLikeCount}>{commentCount}</Text>
            </Pressable>
          </View>
          <View>
            <Pressable>
              <ShareIcon />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}
