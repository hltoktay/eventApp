import React, { Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

export default class Maps extends Component {
  render() {
    return <View style={styles.container}></View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center"
  }
});
