import { View, Text, Pressable } from "react-native";
import styles from "./upComingSessionCard.style";
import Card from "../../common/card";
import { PlayIcon } from "../../../assets/icons";

export default function UpComingSessionCard() {
  return (
    <Card>
      <View style={styles.container}>
        <Text style={styles.title}>Upcoming Session</Text>
        <Text style={styles.subTitle}>
          Sahana V, Msc in Clinical Psychology
        </Text>
        <Text style={styles.timeText}>7:30 PM - 8:30 PM</Text>
        <Pressable style={styles.joinNowBtn}>
          <Text style={styles.joinNowText}>Join Now</Text>
          <PlayIcon style={{ marginTop: 2 }} />
        </Pressable>
      </View>
    </Card>
  );
}
