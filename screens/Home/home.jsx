import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./home.style";
import { Ionicons, Fontisto } from "@expo/vector-icons";
// import { Carousel, Welcome, Headings, ProductRow } from "../../components";
// import SearchHome from "../../components/SearchHome/searchHome";
import Carousel from "./components/Carousel/carousel";
import TourRow from "./components/TourRow/tourRow";
import SearchHome from "./components/SearchHome/searchHome";
import { SIZES } from "../../constants";

const Home = () => {
  return (
    <View>
      <View style={styles.appBarWrapper}>
        <SearchHome />
      </View>

      <ScrollView style={{ marginBottom: 200 }}>
        <Carousel />
        <TourRow />
        <Carousel />
        <TourRow />
      </ScrollView>
    </View>
  );
};

export default Home;
