import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {connect} from 'react-redux';
import {toggleShow, toggleMemorized} from '../../redux/actions';

class Word extends Component {
  getMemorizedWord = () => {
    this.props.toggleMemorized(id);
  };

  getShowWord = () => {
    this.props.toggleShow(id);
  };

  render() {
    const {en, vn, memorized, isShow, id} = this.props.myWord;
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
            onPress={() => this.props.toggleMemorized(id)}>
            <Text>{memorizedButtonText}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.toggleShow(id)}>
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

export default connect(mapStateToProps, {toggleMemorized, toggleShow})(Word);
