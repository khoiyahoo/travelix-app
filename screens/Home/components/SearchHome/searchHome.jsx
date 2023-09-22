import React, { useEffect } from "react";
import { View, TouchableOpacity, Text, TextInput } from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";
import styles from "./styles";
import { COLORS, SIZES } from "../../../../constants";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
  const navigation = useNavigation();
  const textInputRef = React.useRef();

  const focusOnInput = (e) => {
    textInputRef.current.focus();
  };
  navigation.addListener("focus", focusOnInput);

  useEffect(() => {
    navigation.removeListener("focus", focusOnInput);
  }, [textInputRef]);

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Feather name="search" size={24} style={styles.searchIcon} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            ref={textInputRef}
            onPressIn={() => {
              navigation.navigate("Search");
            }}
            placeholder="What are you looking for ?"
          />
        </View>
      </View>
      <View style={styles.notiWrapper}>
        <TouchableOpacity>
          <FontAwesome
            name="bell"
            size={SIZES.large}
            color={COLORS.lightWhite}
            style={{ marginLeft: SIZES.small }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;
