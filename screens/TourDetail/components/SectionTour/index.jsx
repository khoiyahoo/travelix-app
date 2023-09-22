import { FlatList, Text, View } from "react-native";
import React, { memo } from "react";
import { SIZES, COLORS } from "../../../../constants";
import styles from "./styles";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
const SectionTour = () => {
  return (
    <View>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>
            Four islans Excursion in South Phu Quoc - Day Tour
          </Text>
          <View style={styles.wrapperRate}>
            <View style={styles.boxRate}>
              <Entypo
                name="location"
                size={24}
                color={`${COLORS.primaryLight}`}
              />
              <Text style={styles.rate}>9.1 Excellent</Text>
            </View>
            <View style={styles.boxReview}>
              <Text style={styles.review}>(from 28 reviews)</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.containerDate}>
        <View style={styles.boxDate}>
          <FontAwesome5 name="calendar-alt" size={18} color="black" />
          <Text style={styles.textDate}>Tour Date | Thu, 21 Sep 2023</Text>
        </View>
        <View style={styles.boxDate}>
          <FontAwesome5 name="clock" size={18} color="black" />
          <Text style={styles.textDate}>Tour Date | Thu, 21 Sep 2023</Text>
        </View>
        <TouchableOpacity style={styles.boxDate}>
          <Entypo name="location-pin" size={18} color="black" />

          <Text style={styles.textDate} numberOfLines={1}>
            100/2, Xã Hòa Bắc,Huyện Hòa Vang, Thành phố Đà Nẵng ewrwerwerwer
          </Text>
          <View>
            <AntDesign name="right" size={18} color={`${COLORS.gray2}`} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default SectionTour;
