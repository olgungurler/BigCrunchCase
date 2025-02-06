import { TouchableOpacity, View } from "react-native";
import { Tabs } from "expo-router";
import {
  CommunityIcon,
  HomeIcon,
  MessagesIcon,
  SessionsIcon,
} from "../../assets/icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "relative",
          overflow: "hidden",
          height: 85,
          paddingTop: "11px auto",
        },
      }}
    >
      {tabsScreenElements.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            tabBarIcon: ({ focused }) => (
              <>
                <View style={focused ? activeTabDot : null} />
                <tab.icon focused={focused} />
              </>
            ),
            tabBarButton: (props) => (
              <TouchableOpacity
                {...props}
                activeOpacity={1}
                style={tabButtonStyle}
              />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}

const tabButtonStyle = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
};

const activeTabDot = {
  position: "absolute",
  top: "-100%",
  left: "50%",
  width: 12,
  height: 12,
  marginTop: -6,
  backgroundColor: "#FE8235",
  borderRadius: "50%",
  transform: [{ translateX: "-50%" }],
};

const tabsScreenElements = [
  {
    name: "index",
    icon: HomeIcon,
  },
  {
    name: "sessions",
    icon: SessionsIcon,
  },
  {
    name: "messages",
    icon: MessagesIcon,
  },
  {
    name: "community",
    icon: CommunityIcon,
  },
];
