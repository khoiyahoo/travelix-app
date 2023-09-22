import React, { Component } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { COLORS } from "../constants/index";
import { Home, Search, Profile, Tours, Stays } from "../screens";

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  tabBarHideOnKeyboard: true,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 70,
  },
};

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={24}
                color={focused ? COLORS.primary : COLORS.gray2}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Tours"
        component={Tours}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name="location"
                size={24}
                color={focused ? COLORS.primary : COLORS.gray2}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Stays"
        component={Stays}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <MaterialIcons
                name="apartment"
                size={24}
                color={focused ? COLORS.primary : COLORS.gray2}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "person" : "person-outline"}
                size={24}
                color={focused ? COLORS.primary : COLORS.gray2}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
