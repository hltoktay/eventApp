import React, { Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

export default class Register extends Component {
  goBack() {
    this.props.navigation.navigate("Detail");
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Register Page</Text>
        <Button
          title="Go Back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d1d1d1",
    alignItems: "center",
    justifyContent: "center"
  }
});
