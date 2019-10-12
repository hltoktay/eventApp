import React, { Component } from "react";
import { Text, View, StyleSheet, Button, Image } from "react-native";
import Communications from "react-native-communications";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import { withNavigation } from "react-navigation";

import Icon from "react-native-vector-icons/FontAwesome";

class Detail extends Component {
  render() {
    const mapIcon = (
      <Icon style={{ paddingRight: 5 }} name="map" color="black" size={20} />
    );

    const phoneIcon = (
      <Icon style={{ paddingRight: 5 }} name="phone" color="black" size={20} />
    );
    const registerIcon = (
      <Icon
        style={{ paddingRight: 5 }}
        name="smile-o"
        color="black"
        size={20}
      />
    );

    const params = this.props.navigation.state.params;

    return (
      <ScrollView style={styles.container}>
        <View
          style={{
            height: 250,
            width: "100%",
            alignSelf: "stretch",
            marginTop: 75,

            shadowColor: "black",
            shadowOpacity: 0.8,
            shadowRadius: 15
          }}
        >
          <Image
            resizeMode="contain"
            source={require("../assets/event.jpg")}
            style={{
              width: "100%",
              height: "100%",
              alignSelf: "stretch",
              flex: 1,
              borderRadius: 40
            }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 8,
            alignItems: "baseline"
          }}
        >
          <View
            style={{
              flexDirection: "row",
              marginTop: 8,
              padding: 5,
              alignItems: "baseline"
            }}
          >
            <Text style={{ fontSize: 14, fontWeight: "bold" }}>Type: </Text>
            <Text>Educational Event</Text>
          </View>
          <Text style={{ fontSize: 14, fontWeight: "bold" }}>12.12.2019</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 15,
            justifyContent: "center"
          }}
        >
          <View
            style={{
              marginLeft: 10,
              shadowColor: "black",
              shadowOpacity: 0.3,
              shadowRadius: 5
            }}
          >
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Maps")}
              style={{
                flexDirection: "row",
                padding: 12,
                borderRadius: 6,
                backgroundColor: "#86dfe5",
                width: 90
              }}
            >
              {mapIcon}
              <Text style={{ color: "#000", fontSize: 16 }}>Map</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginLeft: 20,
              shadowColor: "black",
              shadowOpacity: 0.3,
              shadowRadius: 5
            }}
          >
            <TouchableOpacity
              onPress={() => Communications.phonecall("0123456789", true)}
              style={{
                flexDirection: "row",
                padding: 12,
                borderRadius: 6,
                backgroundColor: "#86dfe5",
                width: 90
              }}
            >
              {phoneIcon}
              <Text style={{ color: "#000", fontSize: 16 }}>Call</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginLeft: 20,
              shadowColor: "black",
              shadowOpacity: 0.3,
              shadowRadius: 5
            }}
          >
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Register")}
              style={{
                flexDirection: "row",
                padding: 12,
                borderRadius: 6,
                backgroundColor: "#86dfe5",
                width: 110
              }}
            >
              {registerIcon}
              <Text style={{ color: "#000", fontSize: 16 }}>Register </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ marginTop: 8 }}>
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>Event Name</Text>
        </View>
        <View>
          <Text
            style={{ fontSize: 14, marginTop: 5, justifyContent: "center" }}
          >
            "The Second International Conference on Quality Education is being
            organized by Rato Bangala Group of Institutions , Ministry of
            Education, Science and Technology Nepal and supported by Ncell
          </Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  }
});

export default withNavigation(Detail);
