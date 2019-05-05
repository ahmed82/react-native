import React, { Component } from 'react';
import { Animated, } from 'react-native';


class resetPosition extends Component {       

setResetPosition(){
    Animated.spring(this.state.position, {
        toValue: {x: 0, y: 0}
    }).start();
};
}

export default {setResetPosition,} //resetPosition;