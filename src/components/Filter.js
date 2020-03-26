import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import {connect} from 'react-redux';

class Filter extends Component {
  getTextStyleFilter(statusName) {
    const {myFilter} = this.props;
    if (statusName === myFilter) {
      return {color: 'red', fontWeight: 'bold'};
    }
    return styles.buttonText;
  }

  getFilterStatus(acctionType) {
    return this.props.dispatch({type: acctionType});
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            this.getFilterStatus('FILTER_SHOW_ALL');
          }}>
          <Text style={this.getTextStyleFilter('SHOW_ALL')}>SHOW ALL</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.getFilterStatus('FILTER_MEMORIZED');
          }}>
          <Text style={this.getTextStyleFilter('MEMORIZED')}>MEMORIZED</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.getFilterStatus('FILTER_NEED_PRACTICE');
          }}>
          <Text style={this.getTextStyleFilter('NEED_PRACTICE')}>
            NEED PRACTICE
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {myFilter: state.filterStatus};
}

export default connect(mapStateToProps)(Filter);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
});
