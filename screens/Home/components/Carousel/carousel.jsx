import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
  Image,
} from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
// import styles from "./carousel.style";
import { COLORS, SIZES } from "../../../../constants";
import { SliderBox } from "react-native-image-slider-box";

const Carousel = () => {
  const slides = [
    "https://ik.imagekit.io/tvlk/image/imageResource/2023/06/14/1686708911909-8c5d04299356a7884e3277eb58ced875.png?tr=q-75,w-427",
    "https://ik.imagekit.io/tvlk/image/imageResource/2023/06/14/1686708911909-8c5d04299356a7884e3277eb58ced875.png?tr=q-75,w-427",
    "https://ik.imagekit.io/tvlk/image/imageResource/2023/06/14/1686708911909-8c5d04299356a7884e3277eb58ced875.png?tr=q-75,w-427",
  ];
  return (
    <View>
      <SliderBox
        images={slides}
        dotColor={COLORS.primary}
        // inactiveDotColor={COLORS.secondary}
        ImageComponentStyle={{
          borderRadius: 15,
          width: "95%",
          marginTop: 15,
        }}
        autoplay
        circleLoop
      />
    </View>
  );
};

export default Carousel;
