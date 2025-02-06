import { View, Text, ScrollView, Pressable, Dimensions } from "react-native";
import styles from "./swiper.style";
import {
  AngryIcon,
  CalmIcon,
  HappyIcon,
  ManicIcon,
  SadIcon,
} from "../../../assets/icons";

export default function Swiper() {
  const screenWidth = Dimensions.get("window").width;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>How are you feeling today ?</Text>
      <ScrollView
        style={{ width: screenWidth }}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {swiperElements.map((element, index) => (
          <Pressable
            key={index}
            style={styles.fellingWrapper(index + 1 === swiperElements.length)}
          >
            <View
              style={[
                styles.fellingIconWrapper,
                { backgroundColor: element.color },
              ]}
            >
              <element.icon />
            </View>
            <Text style={styles.fellingTitle}>{element.title}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}

const swiperElements = [
  {
    color: "#EF5DA8",
    title: "Happy",
    icon: HappyIcon,
  },
  {
    color: "#AEAFF7",
    title: "Calm",
    icon: CalmIcon,
  },
  {
    color: "#A0E3E2",
    title: "Manic",
    icon: ManicIcon,
  },
  {
    color: "#F09E54",
    title: "Angry",
    icon: AngryIcon,
  },
  {
    color: "#C3F2A6",
    title: "Sad",
    icon: SadIcon,
  },
];
