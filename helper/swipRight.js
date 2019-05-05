forceSwipeRight(){
    Animated.timing(this.state.position, {
        toValue: { x: SCREEN_WIDTH, y: 0 },
        duration: SWIPE_OUT_DURATION // 250 Mili-Second
    }).start();
}