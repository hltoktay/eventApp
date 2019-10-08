import React, { Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

export default class AllEvents extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> textInComponent </Text>
        <Button
          title="Go to Detail"
          onPress={() => this.props.navigation.navigate("Details")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#98C4FF",
    alignItems: "center",
    justifyContent: "center"
  }
});
