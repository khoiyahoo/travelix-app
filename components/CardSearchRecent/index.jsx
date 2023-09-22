import { FlatList, Text, View, TouchableOpacity, Image } from "react-native";
import React, { memo } from "react";
import { SIZES, COLORS } from "../../constants";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";

const CardSearchRecent = memo(({ item }) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: "https://ik.imagekit.io/tvlk/image/imageResource/2023/06/14/1686721948003-7928a0b56734caaca663b9239cde96da.png?tr=q-75,w-427",
            }}
            style={styles.image}
          />
        </View>
        <View style={{ paddingHorizontal: 12 }}>
          <Text style={styles.title} numberOfLines={1}>
            Four Islands Excursion in South Phu Quoc
          </Text>
          <View style={styles.boxDesc}>
            <Text style={styles.descSub}>Xperience </Text>
            <Text>- Recently View</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
});
export default CardSearchRecent;
