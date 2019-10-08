import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import AllEvents from "./src/Events";
import Detail from "./src/Details";
import Maps from "./src/Maps";

const Details = createStackNavigator(
  {
    Details: {
      screen: Detail
    },
    Maps: {
      screen: Maps
    }
  },
  {
    headerMode: "none"
  }
);

const Events = createStackNavigator({
  Event: {
    screen: AllEvents
  }
});

const BottomTabs = createBottomTabNavigator({
  Event: {
    screen: Events
  },
  Details: {
    screen: Details
  }
});

export default createAppContainer(BottomTabs);
