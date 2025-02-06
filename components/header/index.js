import { View, Image, Text } from "react-native";
import styles from "./header.style";
import { NatificationIcon } from "../../assets/icons";

export default function Header() {
  const notificationCount = 3;
  return (
    <View style={styles.container}>
      <Image
        style={styles.avatarImg}
        source={require("../../assets/images/avatar.png")}
      />
      <View style={styles.NatificationContainer}>
        <NatificationIcon />
        {notificationCount > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{notificationCount}</Text>
          </View>
        )}
      </View>
    </View>
  );
}