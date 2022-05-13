import React from "react";
import { View,ScrollView, Text, Image ,ActivityIndicator} from "react-native";
import { TouchableOpacity } from "react-native";

export default class Card extends React.Component {
  state = { news: [], resReady: 0 }
  componentDidMount() {
    fetch('https://egyptian-antiquities.com/en/wp-json/wp/v2/posts?per_page=5 ')
      .then((r) => r.json())
      .then((rj) => {
        this.setState({ news: rj, resReady: 1 }, function () {
          console.log(rj)

        })
      }).catch((err) => {
        console.log(err)
      })
  }
  render() {
    return (
      <ScrollView style={{ marginTop: 80 }}>
{this.renderNews()}
      </ScrollView>


    );
  }
  renderNews() {
    if (this.state.resReady === 1) {
     
        return (
          this.state.news.map((news,i) => {
            return(
          <TouchableOpacity key={i} style={{ display: 'flex', flexDirection: "row", padding: 5, alignContent: "center" }}  onPress={() => { this.props.navigation.navigate('CardView',{image:news.better_featured_image.source_url,title:news.title.rendered,desc:news.content.rendered.substring(0,50)})}}>
            <View>
              <View>
              
                <Image
                  source={{ uri:news.better_featured_image.source_url }}
                  style={{ width: 150, borderRadius: 10, height: 200, marginTop: 20 }}

                />
              </View>
            </View>
            <View style={{ flex: 3, padding: 20 }}>
                <Text style={{ fontWeight:'bold', fontFamily:"verdana"}}>{news.title.rendered}</Text>
              <Text>
                {news.content.rendered.substring(0,50)}
              </Text>
            </View>
          </TouchableOpacity>
            )

      })
        )
    } else {
      return (
        <ActivityIndicator size='large' style={{flex: 1, alignItems: "center", justifyContent: "center" }}/>
      )

    }
  }
}