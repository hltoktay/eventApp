import React, { Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

export default class Detail extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> textInComponent </Text>
        <Button
          title="Go to Map"
          onPress={() => this.props.navigation.navigate("Maps")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center"
  }
});
