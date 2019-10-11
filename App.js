import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import AllEvents from "./src/Events";
import Detail from "./src/Details";
import Maps from "./src/Maps";

import Icon from "react-native-vector-icons/FontAwesome";

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
    initialRouteName: "Details",
    headerMode: "none"
  }
);

const Events = createStackNavigator(
  {
    Event: {
      screen: AllEvents
    }
  },
  {
    headerLayoutPreset: "center",
    defaultNavigationOptions: () => ({
      headerTitle: (
        <Image
          source={require("./assets/logo.png")}
          resizeMode="contain"
          style={{
            width: 70
          }}
        />
      )
    })
  }
);

const BottomTabs = createBottomTabNavigator(
  {
    Event: {
      screen: Events,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
          return <Icon name="music" color={tintColor} size={20} />;
        }
      })
    },
    Details: {
      screen: Details,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
          return <Icon name="plus" color={tintColor} size={20} />;
        }
      })
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "#ff4757",
      inactiveTintColor: "#000",
      labelStyle: {
        fontSize: 13
      },
      style: {
        backgroundColor: "#fff"
      }
    }
  }
);

export default createAppContainer(BottomTabs);
