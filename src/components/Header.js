import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {connect} from 'react-redux';

class Header extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: 'grey',
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <Text />
        <Text>My Word</Text>
        <TouchableOpacity
          onPress={() => {
            this.props.dispatch({type: 'TOGGLE_PLUS'});
          }}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect()(Header);
