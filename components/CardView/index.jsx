import { FlatList, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SIZES, COLORS } from "../../constants";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CardView = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("TourDetails", { item });
      }}
    >
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: item.imageUrl,
            }}
            style={styles.image}
          />
          <View style={styles.priceContainer}>
            <Text style={styles.price}>800,000 VND</Text>
          </View>
        </View>
        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={1}>
            {item.title}
          </Text>
          <Text style={styles.city}>
            From {item.cityStart} to {item.cityEnd}
          </Text>
          <Text style={styles.city}>{item.date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default CardView;
