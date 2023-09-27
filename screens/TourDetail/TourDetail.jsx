import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  ScrollView,
  Animated,
  Button,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import { SIZE, COLORS } from "../../constants";
import { memo, useRef, useState } from "react";
import { SliderBox } from "react-native-image-slider-box";
import TakePlace from "./components/TakePlace";
import SelectTicket from "./components/SelectTicket";
import SectionTour from "./components/SectionTour";
import { AntDesign } from "@expo/vector-icons";
import TopNavigation from "../../components/TopNavigation";
import ModalCalendar from "../../components/modal/ModalCalendar";

const slides = [
  "https://ik.imagekit.io/tvlk/image/imageResource/2023/06/14/1686721948003-7928a0b56734caaca663b9239cde96da.png?tr=q-75,w-427",
  "https://ik.imagekit.io/tvlk/image/imageResource/2023/06/14/1686721948003-7928a0b56734caaca663b9239cde96da.png?tr=q-75,w-427",
  "https://ik.imagekit.io/tvlk/image/imageResource/2023/06/14/1686721948003-7928a0b56734caaca663b9239cde96da.png?tr=q-75,w-427",
];
const TourDetails = memo(({ navigation }) => {
  const scrollA = useRef(new Animated.Value(0)).current;
  const [isModalVisible, setModalVisible] = useState(false);

  const onToggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const onModalVisible = () => {
    setModalVisible(false);
  };

  return (
    <View>
      {/* <View style={styles.header}>
        <AntDesign name="arrowleft" size={32} color="white" />
        <Text style={styles.nameTour}>TOUR PHU QUOC NHA TRANG</Text>
      </View> */}
      <TopNavigation
        title="TOUR PHU QUOC NHA TRANG"
        scrollA={scrollA}
        navigation={navigation}
      />
      <Animated.ScrollView
        style={styles.container}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollA } } }],
          { useNativeDriver: true }
        )}
      >
        {/* <Animated.SliderBox
          images={slides}
          dotColor={COLORS.primary}
          circleLoop
          style={styles.banner(scrollA)}
        /> */}
        <View style={styles.bannerContainer}>
          <Animated.Image
            style={styles.banner(scrollA)}
            source={{
              uri: "https://ik.imagekit.io/tvlk/image/imageResource/2023/06/14/1686721948003-7928a0b56734caaca663b9239cde96da.png?tr=q-75,w-427",
            }}
          />
        </View>

        <TakePlace />
        <SelectTicket />
        <SectionTour />
        <ModalCalendar
          onModalVisible={onModalVisible}
          onToggleModal={onToggleModal}
          isModalVisible={isModalVisible}
        />
        <View style={styles.btnContainer}>
          <Button title="Show Bottom Sheet" onPress={onToggleModal} />
        </View>
      </Animated.ScrollView>
    </View>
  );
});

export default TourDetails;
