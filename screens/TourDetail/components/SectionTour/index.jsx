import { FlatList, Text, View, Image } from "react-native";
import React, { memo } from "react";
import { SIZES, COLORS } from "../../../../constants";
import styles from "./styles";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

import Button, { BtnType } from "../../../../components/common/Button";

const SectionTour = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxDesc}>
        <View>
          <Text style={styles.titleSection}>What You'll Experience</Text>
        </View>
        <View style={styles.boxDescSub}>
          <View style={styles.itemSub}>
            <View style={styles.dot}></View>
            <Text style={{ fontSize: SIZES.medium }}>
              Feel your heart race as you experience thrilling rides such as
              Skydrop, Disk-O, Swing Carousel, and more
            </Text>
          </View>
          <View style={styles.itemSub}>
            <View style={styles.dot}></View>
            <Text style={{ fontSize: SIZES.medium }}>
              Feel your heart race as you experience thrilling rides such as
              Skydrop, Disk-O, Swing Carousel, and more
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonReadMore}>
        <Button
          title={"Read more"}
          style={styles.button}
          btnType={BtnType.Outlined}
        />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          padding: 12,
          paddingRight: 24,
        }}
      >
        <View style={styles.boxImageCol}>
          <Image
            source={{
              uri: "https://ik.imagekit.io/tvlk/image/imageResource/2023/06/14/1686721948003-7928a0b56734caaca663b9239cde96da.png?tr=q-75,w-427",
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.boxImageCol}>
          <View style={[styles.boxImageRow, styles.boxImgRowTop]}>
            <Image
              source={{
                uri: "https://ik.imagekit.io/tvlk/image/imageResource/2023/06/14/1686721948003-7928a0b56734caaca663b9239cde96da.png?tr=q-75,w-427",
              }}
              style={styles.image}
            />
          </View>
          <View style={styles.boxImageRow}>
            <Image
              source={{
                uri: "https://ik.imagekit.io/tvlk/image/imageResource/2023/06/14/1686721948003-7928a0b56734caaca663b9239cde96da.png?tr=q-75,w-427",
              }}
              style={styles.image}
            />
          </View>
        </View>
      </View>
      <View style={styles.boxGoodFor}>
        <Text style={styles.goodFor}>Good for: </Text>
        <Text style={{ fontSize: SIZES.medium }}>Sea, Family, Relax</Text>
      </View>
    </View>
  );
};
export default SectionTour;
