import React, { memo, useEffect, useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Keyboard,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import styles from "./search.style";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { COLORS } from "../../constants";
import CardSearchRecent from "../../components/CardSearchRecent";

const Search = memo(() => {
  const navigation = useNavigation();
  const textInputRef = React.useRef();
  const [active, setActive] = useState(true);

  const focusOnInput = (e) => {
    textInputRef.current.focus();
  };
  navigation.addListener("focus", focusOnInput);

  const handleActive = () => {
    setActive(!active);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <TouchableOpacity>
            <Feather name="search" size={24} style={styles.searchIcon} />
          </TouchableOpacity>
          <View style={styles.searchWrapper}>
            <TextInput
              ref={textInputRef}
              style={styles.searchInput}
              placeholder="What are you looking for ?"
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.cancelWrapper}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text style={styles.cancelText}>CANCEL</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.controlWrapper}>
        <View style={styles.activeBox}>
          <Text style={styles.textActive}>BASED ON YOUR ACTIVITIES</Text>
          {active ? (
            <TouchableOpacity onPress={handleActive}>
              <Entypo
                name="eye"
                size={24}
                color={`${COLORS.primaryLight}`}
                style={{ marginLeft: 12 }}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={handleActive}>
              <Entypo
                name="eye-with-line"
                size={24}
                color={`${COLORS.primaryLight}`}
                style={{ marginLeft: 12 }}
              />
            </TouchableOpacity>
          )}
        </View>

        <TouchableOpacity>
          <Text style={styles.clear}>CLEAR</Text>
        </TouchableOpacity>
      </View>

      <View style={active ? styles.showList : styles.hideList}>
        <CardSearchRecent />
      </View>
    </>
  );
});

export default Search;
