import React, { Component } from 'react';
import { AppRegistry, Image } from 'react-native';

export default class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
        /** the braces surrounding {pic} - these embed the variable pic into JSX.
         You can put any JavaScript expression inside braces in JSX. */
      <Image source={pic} style={{width: 193, height: 110}}/>

      // <Image source={require('./assets/img/aa2.jpg')} style={styles.container}
      //{{justifyContent: "center", alignItems: "center" ,width: 200, height: 200}} 
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => Bananas);