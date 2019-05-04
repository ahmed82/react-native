import React from 'react';
import { Card, Button } from 'react-native-elements';
//or import React, { Component } from 'react'; // to extends Component //only
import { 
  AppRegistry, StyleSheet, Text, View
 } from 'react-native';
import Deck from './component/Deck';

const DATA  = [
  {id: 1, name: "Company One", category: "Finance", start: 1981, end: 2004},
  {id: 2, name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {id: 3, name: "Company Three", category: "HR", start: 1999, end: 2007},
  {id: 4, name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {id: 5, name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {id: 6, name: "Company Six", category: "IT", start: 1987, end: 2010},
  {id: 7, name: "Company Seven", category: "Shipping", start: 1986, end: 1996},
  {id: 8, name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {id: 9, name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
          //<Text>{item.category}</Text>
/* */
export default class App extends React.Component {
    renderCard(item){
        return (
            //<Text>{item.category}</Text>
            <Card
            key={item.id}
            title={item.category}
            //image={{uri: item.uri}}
            >
            <Text>
                I can make what Allah give me power to do.
            </Text>
            <Button
                icon={{name: 'code'}}
                background="#03A9F4"
                title="View Now!"
        />
        </Card> 
    );
  }
  render() {
    return (
        <View style={styles.container}>
            <Deck
                data={DATA}
                renderCard={this.renderCard}
             />
        </View> 
         );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a53',
  //   alignItems: 'center',
   // justifyContent: 'center', */
  },
});
