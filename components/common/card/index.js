import { View } from "react-native";
import styles from "./card.style";
import { CardShadowSvg } from "../../../assets/icons";

export default function Card({
  children,
  icon = true,
  color = "#FEF3E7",
  borderWith = 0,
  style,
}) {
  return (
    <View style={[styles.container(color, borderWith), style]}>
      {icon && (
        <View style={styles.svgContainer}>
          <CardShadowSvg />
        </View>
      )}
      {children}
    </View>
  );
}
