import React, { Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default class Maps extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={{ width: "100%", height: "100%" }}
          initialRegion={{
            latitude: 51.55395,
            longitude: -0.07337,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        >
          <Marker
            // image={require("../assets/pin.png")}
            title="Event Name"
            coordinate={{ latitude: 51.55395, longitude: -0.07337 }}
          />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
