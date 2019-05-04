import React, { Component } from 'react';
import { View, Animated } from 'react-native';

class Deck extends Component {
    myRenderCards() {
        return this.props.data.map(item => {
            return this.props.renderCard(item);
        });
    }
    render(){
        return (
            <View>
                {this.myRenderCards()}
            </View>
        );
    }
}

export default Deck;