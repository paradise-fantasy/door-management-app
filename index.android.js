/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 const OPEN_DOOR_ADDRESS = 'http://129.241.209.244:5000/api/open-door';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback
} from 'react-native';

class DoorManagementApp2 extends Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
    this._onPressIn = this._onPressIn.bind(this);
    this._onPressOut = this._onPressOut.bind(this);
  }

  _onPressIn() {
    console.log('press in');
    fetch(OPEN_DOOR_ADDRESS).then(response => console.log(response));
    this.setState({ active: true });
  }

  _onPressOut() {
    console.log('press out');
    this.setState({ active: false });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPressIn={this._onPressIn} onPressOut={this._onPressOut}>
          <View style={styles.buttonContainer}>
            <Image style={[styles.button, { opacity: this.state.active ? 0 : 1 }]} source={require('./images/bryter_opp.png')} />
            <Image style={[styles.button, { top: -256, opacity: this.state.active ? 1 : 0 }]} source={require('./images/bryter_ned.png')} />
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  buttonContainer: {
    width: 256,
    height: 256
  },
  button: {
    width: 256,
    height: 256,
    resizeMode: 'contain'
  },
});

AppRegistry.registerComponent('DoorManagementApp2', () => DoorManagementApp2);
