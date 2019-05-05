import React, { Component } from 'react';
import { View, Animated, PanResponder, Dimensions } from 'react-native';
//import resetPosition from '../helper/resetPosition'

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = 0.55 * SCREEN_WIDTH;
const SWIPE_OUT_DURATION = 250;
class Deck extends Component {
    static defaultProps = {
        //if the user didn not pass those props will get intit with default values
        onSwipeRight: () => {},
        onSwipeLeft: () => {}
    }
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
            
            onPanResponderRelease: (event, gesture) => {
                if (gesture.dx > SWIPE_THRESHOLD) {
                    this.forceSwipe('right'); // this.forceSwipeRight//console.log('Like')
                } else if (gesture.dx < -SWIPE_THRESHOLD){
                    this.forceSwipe('left');
                }else {
                    this.resetPosition();
                    //resetPosition.setResetPosition()
                }
            }
        });
         /* there is no good resone to assign the panResponder to state */
        this.state = { panResponder, position, index: 0 };
    }
    forceSwipe(direction){
        const x = direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH;
        Animated.timing(this.state.position, {
            toValue: { x, y: 0 },//toValue: { x: x, y: 0 },
            duration: SWIPE_OUT_DURATION // 250 Mili-Second
        }).start(() => this.onSwipeComplete(direction));
    }

    onSwipeComplete(direction){
        const { onSwipeRight, onSwiprLeft, data } = this.props;
        const item = data[this.state.index];
        direction === 'right' ? onSwipeRight(item) : onSwiprLeft(item);
        this.state.position.setValue({x: 0, y: 0}); // update the postion to go to next card
        this.setState({ index: this.state.index + 1 }); //set new index for next item
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
        if (this.state.index >= this.props.data.length) {
            return this.props.renderNoMoreCards();
        }

        return this.props.data.map((item, i) => {
            if( i < this.state.index) {return null;}

            // We use the i = index from map to applay the animated on single card
            if (i === this.state.index) {//if (index === 0) {
                return (
                    <Animated.View 
                        key={item.id}
                        //moved style body to helper method "getCardStyle" {this.state.position.getLayout()}
                        style={[this.getCardStyle(), styles.cardStyle]}
                        {...this.state.panResponder.panHandlers}
                        >
                            {this.props.renderCard(item)}
                    </Animated.View>
                )                
            }
            // return this.props.renderCard(item); will be rab in View to include the styles
            return (
                <View key={item.id} style={styles.cardStyle}>
                    {this.props.renderCard(item)}
                </View>
            )
        }).reverse(); // to reverse the map result to view the fist card when we stack them on same place
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
const styles = {
    cardStyle: {
        position: 'absolute',//bad will shrink the component to the minimum allow size
        width: SCREEN_WIDTH
       /*  left: 0,
        right: 0 */
    }
}
export default Deck;