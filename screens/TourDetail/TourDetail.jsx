import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import { SIZE, COLORS } from "../../constants";
import { memo } from "react";
import { SliderBox } from "react-native-image-slider-box";
import SectionTour from "./components/SectionTour";
import SelectTicket from "./components/SelectTicket";
const slides = [
  "https://ik.imagekit.io/tvlk/image/imageResource/2023/06/14/1686721948003-7928a0b56734caaca663b9239cde96da.png?tr=q-75,w-427",
  "https://ik.imagekit.io/tvlk/image/imageResource/2023/06/14/1686721948003-7928a0b56734caaca663b9239cde96da.png?tr=q-75,w-427",
  "https://ik.imagekit.io/tvlk/image/imageResource/2023/06/14/1686721948003-7928a0b56734caaca663b9239cde96da.png?tr=q-75,w-427",
];
const TourDetails = memo(() => {
  return (
    <View>
      <SliderBox images={slides} dotColor={COLORS.primary} circleLoop />
      <SectionTour />
      <SelectTicket />
    </View>
  );
});

export default TourDetails;
