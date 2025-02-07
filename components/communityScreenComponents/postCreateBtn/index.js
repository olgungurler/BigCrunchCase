import { Pressable, View } from "react-native";
import styles from "./postCreateBtn.style";
import { PenIcon } from "../../../assets/icons";

export default function PostCreateBtn() {
  return (
    <View style={styles.absoluteBtnWrapper}>
      <Pressable style={styles.absoluteBtnContainer}>
        <PenIcon />
      </Pressable>
    </View>
  );
}
