import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      //<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      //<Image source={pic} style={{width: 193, height: 110}}/>
      <View style={styles.container}>
        <Text>Hi from my son Omar!</Text>
        <Text>I love My Family !!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a53',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
