import React, { Component } from 'react';
import { View, Animated, PanResponder } from 'react-native';

class Deck extends Component {
    constructor(props){
        super(props);
        const position = new Animated.ValueXY();
        const panResponder = PanResponder.create({
            //this set every time user press on the screen T/F or function to set where to trigure
            onMoveShouldSetPanResponder: () => true,
                // gesture object old what and how the user touch in the screen
            onPanResponderMove: (event, gesture) => {
               // console.log(gesture);
               position.setValue({x: gesture.dx,y: gesture.dy})
            },
            
            onPanResponderRelease: () => {}
        });
         /* there is no good resone to assign the panResponder to state */
        this.state = { panResponder, position };
    }
    myRenderCards() {
        return this.props.data.map(item => {
            return this.props.renderCard(item);
        });
    }
    render(){
        return ( /* use Animated.View replace View to reflect the Animatetion */
            <Animated.View 
                style={this.state.position.getLayout()}
                {...this.state.panResponder.panHandlers}
            >
                {this.myRenderCards()}
            </Animated.View>
        );
    }
}

export default Deck;