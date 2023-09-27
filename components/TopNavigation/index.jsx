import React, { useState, useEffect } from "react";
import { View, Text, StatusBar, TouchableOpacity } from "react-native";
import { useSafeArea } from "react-native-safe-area-context";
import { SIZES, COLORS, BANNER_H, TOPNAVI_H } from "../../constants";
import { AntDesign } from "@expo/vector-icons";

const TopNavigation = (props) => {
  const safeArea = useSafeArea();

  const { title, scrollA, navigation } = props;
  const isFloating = !!scrollA;
  const [isTransparent, setTransparent] = useState(isFloating);

  useEffect(() => {
    if (!scrollA) {
      return;
    }
    const listenerId = scrollA.addListener((a) => {
      const topNaviOffset = BANNER_H - TOPNAVI_H - safeArea.top;
      isTransparent !== a.value < topNaviOffset &&
        setTransparent(!isTransparent);
    });
    return () => scrollA.removeListener(listenerId);
  });

  return (
    <>
      <StatusBar
        barStyle={isTransparent ? "light-content" : "dark-content"}
        backgroundColor="transparent"
        translucent
      />
      <View style={styles.container(safeArea, isFloating, isTransparent)}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.title(isTransparent)}>{title}</Text>
      </View>
    </>
  );
};

const styles = {
  container: (safeArea, isFloating, isTransparent) => ({
    paddingTop: safeArea.top,
    marginBottom: isFloating ? -TOPNAVI_H - safeArea.top : 0,
    height: TOPNAVI_H + safeArea.top,
    shadowOffset: { y: 0 },
    backgroundColor: isTransparent ? "transparent" : `${COLORS.secondary}`,
    shadowOpacity: isTransparent ? 0 : 0.5,
    elevation: isTransparent ? 0.01 : 5,
    zIndex: 100,
    display: "flex",
    alignItems: "center",
    // justifyContent: "flex-start",
    flexDirection: "row",
    paddingLeft: 12,
  }),
  title: (isTransparent) => ({
    fontWeight: "bold",
    fontSize: 16,
    color: isTransparent ? "#FFF" : "#FFF",
    marginLeft: 24,
  }),
};

export default TopNavigation;
