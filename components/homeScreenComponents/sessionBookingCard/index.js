import { View, Text, Pressable } from "react-native";
import styles from "./sessionBookingCard.style";
import { CalendarIcon, SessionBookingIcon } from "../../../assets/icons";

export default function SessionBookingCard() {
  return (
    <View style={styles.container}>
      <View style={styles.leftSideWrapper}>
        <Text style={styles.title}>1 on 1 Sessions</Text>
        <Text style={styles.subTitle}>
          Let’s open up to the things that matter the most
        </Text>
        <Pressable style={styles.bookNowBtn}>
          <Text style={styles.bookNowText}>Book Now</Text>
          <CalendarIcon />
        </Pressable>
      </View>
      <View style={styles.sessionIcon}>
        <SessionBookingIcon />
      </View>
    </View>
  );
}
