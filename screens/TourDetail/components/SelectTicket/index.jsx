import { FlatList, Text, View, Button } from "react-native";
import React, { memo, useRef, useState } from "react";
import { SIZES, COLORS } from "../../../../constants";
import styles from "./styles";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const list = [
  { id: 1, date: "Fri", month: "17, Sep" },
  { id: 2, date: "Fri", month: "17, Sep" },
  { id: 3, date: "Fri", month: "17, Sep" },
  { id: 4, date: "Fri", month: "17, Sep" },
  { id: 5, date: "Fri", month: "17, Sep" },
  { id: 6, date: "Fri", month: "17, Sep" },
];
const SelectTicket = memo(() => {
  return (
    <View>
      <View style={styles.boxTitleSelect}>
        <Text style={styles.titleSelect}>Select Ticket</Text>
      </View>
      <View style={styles.boxInfo}>
        <Ionicons
          name="information-circle"
          size={24}
          color={`${COLORS.primary}`}
          style={{ marginHorizontal: 12 }}
        />
        <Text style={styles.textInfo}>
          A purchase can pay after you go travel
        </Text>
      </View>
      <View style={styles.containerSelectDate}>
        <TouchableOpacity style={styles.boxItemDate}>
          <FontAwesome5
            name="calendar-alt"
            size={18}
            color={`${COLORS.gray}`}
          />
          <AntDesign name="down" size={24} color={`${COLORS.gray}`} />
        </TouchableOpacity>
        <View style={{ marginLeft: 12 }}>
          <FlatList
            data={list}
            key={(item) => item.id}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View item={item} style={styles.boxItemDate}>
                <Text>{item?.date}</Text>
                <Text>{item?.month}</Text>
              </View>
            )}
            horizontal
            contentContainerStyle={{ columnGap: SIZES.small }}
          />
        </View>
      </View>
    </View>
  );
});
export default SelectTicket;
