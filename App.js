import React from 'react';
//or import React, { Component } from 'react'; // to extends Component //only
import { AppRegistry, StyleSheet,Image, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      /*The line bellow if you don't want to use  "StyleSheet" componant from react-native
      //<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}> */
      <View>
        <Image source={pic} style={{width: 193, height: 110}}/>
        <View style={styles.container}>
          <Text>Hi from my son Omar!</Text>
          <Text>I love My Family !!</Text>
        </View> 
      </View>
    );
  }
}
// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a53',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
