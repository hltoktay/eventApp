import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableHighlight
} from "react-native";

import data from "../db";

export default class AllEvents extends Component {
  state = {
    data: data
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={{ width: "100%" }}
          data={this.state.data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => {
            return (
              <TouchableHighlight
                onPress={() =>
                  this.props.navigation.navigate("Details", { ...item })
                }
              >
                <View
                  style={{
                    marginVertical: 20,
                    marginHorizontal: 15,
                    borderRadius: 15,
                    backgroundColor: "#ced",
                    elevation: 15
                  }}
                >
                  <View
                    style={{
                      padding: 15,
                      backgroundColor: "#86dfe5",
                      borderTopLeftRadius: 15,
                      borderTopRightRadius: 15
                    }}
                  >
                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                      {item.eventName}
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "baseline"
                      }}
                    >
                      <View
                        style={{ flexDirection: "row", alignItems: "baseline" }}
                      >
                        <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                          Type:
                        </Text>
                        <Text>{item.genre}</Text>
                      </View>
                      <Text style={{ fontSize: 12, fontStyle: "italic" }}>
                        {item.date}
                      </Text>
                    </View>
                  </View>
                  <View>
                    <Image
                      source={{ uri: item.image }}
                      style={{
                        width: "100%",
                        height: 200,
                        borderBottomLeftRadius: 25,
                        borderBottomRightRadius: 25,
                        flex: 1,
                        alignSelf: "stretch"
                      }}
                    />
                  </View>
                </View>
              </TouchableHighlight>
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f2f6"
  }
});
