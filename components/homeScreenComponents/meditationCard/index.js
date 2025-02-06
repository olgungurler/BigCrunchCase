import { View, Text, Pressable } from "react-native";
import styles from "./meditation.style";
import { MeditationIcon, RightArrowIcon } from "../../../assets/icons";
import Card from "../../common/card";

export default function MeditationCard() {
  return (
    <Card color="#55A06F" icon={false}>
      <View style={styles.container}>
        <View style={styles.leftSideWrapper}>
          <Text style={styles.title}>Plan Expired</Text>
          <Text style={styles.subTitle}>
            Get back chat access and session credits
          </Text>
          <Pressable style={styles.buyMoreBtn}>
            <Text style={styles.buyMoreText}>Buy More</Text>
            <View style={styles.buyMoreArrowIcon}>
              <RightArrowIcon />
            </View>
          </Pressable>
        </View>
        <View style={styles.meditationIcon}>
          <MeditationIcon />
        </View>
      </View>
    </Card>
  );
}
