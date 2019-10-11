import React, { Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

export default class Detail extends Component {
  render() {
    const params = this.props.navigation.state.params;

    return (
      <View style={styles.container}>
        {/* <Text>{params.eventName}</Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
