import { View, Text, Image } from "react-native";
import * as React from "react";
import Header from "../commons/Header";
import Footer from "../commons/Footer";

export default class About extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Header navigation={this.props.navigation} />
        <View>
          <Text style={{ padding: 5, textAlign: "center", fontSize: 20,fontFamily:'verdana' }}>
              What do you about us?
          </Text>
        </View>

        <Image
          source={require("../../images/Blue.jpg")}
          style={{ width: 250, height: 250}}
        />
        <Text style={{ padding: 5, textAlign: "center", fontSize: 20,fontFamily:'verdana'  }}>
          About Us From its medieval origins to the digital era, learn
          everything there is to know about the ubiquitous lorem ipsum passage.
        </Text>

        <Footer navigation={this.props.navigation} />
      </View>
    );
  }
}

