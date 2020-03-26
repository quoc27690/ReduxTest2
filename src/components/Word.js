import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {connect} from 'react-redux';

class Word extends Component {
  getMemorizedWord = () => {
    this.props.dispatch({
      type: 'TOGGLE_MEMORIZED',
      id: this.props.myWord.id,
    });
  };

  getShowWord = () => {
    this.props.dispatch({
      type: 'TOGGLE_SHOW',
      id: this.props.myWord.id,
    });
  };

  render() {
    const {en, vn, memorized, isShow} = this.props.myWord;
    const textDecorationLine = memorized ? 'line-through' : 'none';
    const textShowHide = isShow ? '-------' : vn;
    const memorizedButtonText = memorized ? 'Forget' : 'Memorized';
    const showButtonText = isShow ? 'Show' : 'Hide';
    return (
      <View style={styles.container}>
        <Text style={{textDecorationLine}}>{en}</Text>
        <Text>{textShowHide}</Text>
        <View style={styles.controller}>
          <TouchableOpacity
            style={styles.button}
            onPress={this.getMemorizedWord}>
            <Text>{memorizedButtonText}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.getShowWord}>
            <Text>{showButtonText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D2DEF6',
    padding: 10,
    margin: 10,
  },
  controller: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: 'white',
    padding: 5,
  },
});

function mapStateToProps(state) {
  return {myFilter: state.filterStatus};
}

export default connect(mapStateToProps)(Word);
