import React, { Component } from 'react';
import { View, Animated, PanResponder, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
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
            
            onPanResponderRelease: () => {
                this.resetPosition();

            }
        });
         /* there is no good resone to assign the panResponder to state */
        this.state = { panResponder, position };
    }

    resetPosition(){
        Animated.spring(this.state.position, {
            toValue: {x: 0, y: 0}
        }).start();
    }

    getCardStyle(){
        const { position } = this.state;
        const rotate = position.x.interpolate({
               // inputRange: [-500, 0, 500], // move to be daynamic for screen width
               inputRange: [-SCREEN_WIDTH, 0, SCREEN_WIDTH], 
               outputRange: ['-120deg', '0deg', '120deg']
        });
        return {
            //...this.state.position.getLayout(), we already desetructre it above
            ...position.getLayout(),
            //transform: [{ rotate: '45deg'}]
            transform: [{ rotate }] //transform: [{ rotate: rotate}]
        };
    }
    myRenderCards() {
        return this.props.data.map((item, index) => {
            // We use the index from map to applay the animated on single card
            if (index === 0) {
                return (
                    <Animated.View 
                    key={item.id}
                    //moved style body to helper method "getCardStyle" {this.state.position.getLayout()}
                    style={this.getCardStyle()}
                    
                    {...this.state.panResponder.panHandlers}
                    >
                        {this.props.renderCard(item)}
                    </Animated.View>
                )                
            }
            return this.props.renderCard(item);
        });
    }
    render(){
        return ( /* use Animated.View replace View to reflect the Animatetion */
            <Animated.View
                /* style={this.state.position.getLayout()}
                {...this.state.panResponder.panHandlers} */
            >
                {this.myRenderCards()}
            </Animated.View>
        );
    }
}

export default Deck;