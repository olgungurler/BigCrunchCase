import { View, Text, Pressable, Image, FlatList } from "react-native";
import { useState } from "react";
import styles from "./sessionsList.style";
import {
  ArrowDownIcon,
  CalendarIcon,
  ClockIcon,
  SortIcon,
} from "../../../assets/icons";
import Card from "../../common/card";

export default function SessionsList() {
  const [sortedAppointments, setSortedAppointments] = useState(appointments);
  const [isAscending, setIsAscending] = useState(true);

  const handleSort = () => {
    const sorted = [...sortedAppointments].sort((a, b) =>
      isAscending ? a.dateObject - b.dateObject : b.dateObject - a.dateObject
    );
    setSortedAppointments(sorted);
    setIsAscending(!isAscending);
  };

  return (
    <View style={styles.container}>
      <View style={styles.listHeader}>
        <Pressable style={styles.listHeaderLeftBtn}>
          <Text style={styles.headerText}>All Sessions</Text>
          <ArrowDownIcon />
        </Pressable>
        <Pressable onPress={handleSort}>
          <SortIcon />
        </Pressable>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={sortedAppointments}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          renderItem={({ item }) => (
            <Card icon={false} borderWith={item.active ? 0 : 1} color={item.active ? "#FEF3E7" : "#F8F6F5"}>
              <View style={styles.userInfoWrapper}>
                <Image style={styles.userImg} source={item.image} />
                <View style={styles.userInfo}>
                  <Text style={styles.userName}>{item.name}</Text>
                  <Text style={styles.userDegree}>{item.degree}</Text>
                </View>
              </View>
              <View style={styles.dateInfoWrapper}>
                <View style={styles.dateInfo}>
                  <CalendarIcon color="#D6CCC6" />
                  <Text style={styles.dateText}>{item.date}</Text>
                </View>
                <View style={styles.dateInfo}>
                  <ClockIcon color="#D6CCC6" />
                  <Text style={styles.dateText}>{item.time}</Text>
                </View>
              </View>
              <View style={styles.btnWrapper}>
                <Pressable style={styles.coloredBtn}>
                  <Text style={styles.coloredBtnText}>{item.coloredBtnText}</Text>
                </Pressable>
                <Pressable>
                  <Text style={styles.btnText}>{item.btnText}</Text>
                </Pressable>
              </View>
            </Card>
          )}
        />
      </View>
    </View>
  );
}

const appointments = [
  {
    id: "1",
    active: true,
    name: "Sahana V",
    degree: "MSc in Clinical Psychology",
    image: require("../../../assets/images/user1.png"),
    date: "31st March ‘22",
    dateObject: new Date(2022, 2, 31),
    time: "7:30 PM - 8:30 PM",
    coloredBtnText: "Reschedule",
    btnText: "Join Now",
  },
  {
    id: "2",
    active: false,
    name: "Sahana V",
    degree: "MSc in Clinical Psychology",
    image: require("../../../assets/images/user2.png"),
    date: "1st April ‘22",
    dateObject: new Date(2022, 3, 1),
    time: "6:00 PM - 7:00 PM",
    coloredBtnText: "Re-book",
    btnText: "View Profile",
  },
  {
    id: "3",
    active: false,
    name: "Sahana V",
    degree: "MSc in Clinical Psychology",
    image: require("../../../assets/images/user3.png"),
    date: "3rd April ‘22",
    dateObject: new Date(2022, 3, 3),
    time: "6:00 PM - 7:00 PM",
    coloredBtnText: "Re-book",
    btnText: "View Profile",
  },
];
