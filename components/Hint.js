import React from "react";
import { StyleSheet, Text, View, Image, asset, Animated } from "react-360";

const ANIMATION_DURATION = 500;

export default class Hint extends React.Component {
  state = {
    infoCardOpacity: new Animated.Value(0)
  };

  handleInfoEnter = () => {
    Animated.timing(this.state.infoCardOpacity, {
      toValue: 1,
      duration: ANIMATION_DURATION
    }).start();
  };

  handleInfoExit = () => {
    Animated.timing(this.state.infoCardOpacity, {
      toValue: 0,
      duration: ANIMATION_DURATION
    }).start();
  };

  renderInfoIcon = () => {
    return (
      <Image
        source={asset("info.png")}
        style={styles.image}
        onEnter={this.handleInfoEnter}
      />
    );
  };

  renderInfoCard = () => {
    return (
      <Animated.View
        style={[styles.box, { opacity: this.state.infoCardOpacity }]}
      >
        <Text style={styles.title}>{`${this.props.description}`}</Text>
      </Animated.View>
    );
  };

  render() {
    const locationStyle = {
      left: this.props.location.left,
      top: this.props.location.top,
      position: "absolute"
    };

    return (
      <View style={locationStyle} onExit={this.handleInfoExit}>
        {this.renderInfoCard()}
        {this.renderInfoIcon()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 40,
    height: 40
  },
  box: {
    padding: 10,
    borderRadius: 10,
    width: 350,
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "#639dda",
    borderWidth: 3
  },
  title: {
    fontSize: 20,
    fontSize: 22,
  }
});
