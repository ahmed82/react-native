import React from 'react';
import { Card, Button } from 'react-native-elements';
//or import React, { Component } from 'react'; // to extends Component //only
import { 
  AppRegistry, StyleSheet, Text, View
 } from 'react-native';
import Deck from './component/Deck';

const DATA  = [
  {id: 1, name: "Company One", category: "Finance", start: 1981, end: 2004, uri: 'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/531604_10151872443030082_1714693681_n.jpg?_nc_cat=111&_nc_ht=scontent-atl3-1.xx&oh=ec3b33c16596542adef7cbee3330dfd0&oe=5D73F734'},
  {id: 2, name: "Company Two", category: "Retail", start: 1992, end: 2008, uri: 'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/180272_10152809113370082_560137089_n.jpg?_nc_cat=105&_nc_ht=scontent-atl3-1.xx&oh=94f856c33429ab458607eceea1c27e59&oe=5D746775'},
  {id: 3, name: "Company Three", category: "HR", start: 1999, end: 2007, uri: 'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/1653631_10153782791375082_1113289621_n.jpg?_nc_cat=109&_nc_ht=scontent-atl3-1.xx&oh=710502709743601621eefe05e70c8a89&oe=5D2C04DB'},
  {id: 4, name: "Company Four", category: "Retail", start: 1989, end: 2010, uri: 'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/576956_10151811706005082_347508709_n.jpg?_nc_cat=103&_nc_ht=scontent-atl3-1.xx&oh=9a0fb7fcfb2f6c584bd2a630d25f6ac1&oe=5D6512FE'},
  {id: 5, name: "Company Five", category: "Technology", start: 2009, end: 2014, uri: 'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/15622216_10157904047675082_7133515665648586359_n.jpg?_nc_cat=107&_nc_ht=scontent-atl3-1.xx&oh=97ac68d6e3eec261ed4f6a7b1915db53&oe=5D32ACF3'},
  {id: 6, name: "Company Six", category: "IT", start: 1987, end: 2010, uri: 'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/1536439_10154105412205082_8193607548978515660_n.jpg?_nc_cat=105&_nc_ht=scontent-atl3-1.xx&oh=35af8cffb65f0f27a7d11aabfa2b34db&oe=5D355178'},
  {id: 7, name: "Company Seven", category: "Shipping", start: 1986, end: 1996, uri: 'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/10400272_15990885081_8521_n.jpg?_nc_cat=104&_nc_ht=scontent-atl3-1.xx&oh=a06486b2f37c6b0543852a503b1af0d2&oe=5D2DB881'},
  {id: 8, name: "Company Eight", category: "Technology", start: 2011, end: 2016, uri: 'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/557244_10151857986200082_1285591576_n.jpg?_nc_cat=111&_nc_ht=scontent-atl3-1.xx&oh=bc2648cdc7755ae8afaf34aa4f759673&oe=5D768255'},
  {id: 9, name: "Company Nine", category: "Retail", start: 1981, end: 1989, uri: 'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/293853_10151434146510082_724566197_n.jpg?_nc_cat=101&_nc_ht=scontent-atl3-1.xx&oh=e179e1a3ce668178400979090320a45d&oe=5D307DB1'}
  ];

export default class App extends React.Component {
    renderCard(item){
        return (
            //<Text>{item.category}</Text>
            <Card
            key={item.id}
            title={item.category}
            image={{uri: item.uri}}
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
