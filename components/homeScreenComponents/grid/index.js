import { View, Text, Pressable } from "react-native";
import styles from "./grid.style";
import { JournalIcon, LibraryIcon, QuoteIcon } from "../../../assets/icons";

export default function Grid() {
  return (
    <View style={styles.container}>
      <View style={styles.btnWrapper}>
        <Pressable style={styles.btn}>
          <JournalIcon />
          <Text style={styles.btnText}>Journal</Text>
        </Pressable>
        <Pressable style={styles.btn}>
          <LibraryIcon />
          <Text style={styles.btnText}>Library</Text>
        </Pressable>
      </View>
      <View style={styles.quoteWrapper}>
        <Text style={styles.quoteText}>
          “It is better to conquer yourself than to win a thousand battles”
        </Text>
        <QuoteIcon />
      </View>
    </View>
  );
}
