import { View, Text } from "react-native";
import styles from "./card.style";
import { CardShadowSvg } from "../../../assets/icons";

export default function Card({ children }) {
  return (
    <View style={styles.container}>
      <View style={styles.svgContainer}>
        <CardShadowSvg />
      </View>
      {children}
    </View>
  );
}
