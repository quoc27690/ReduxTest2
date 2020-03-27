import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import {connect} from 'react-redux';
import {
  filterShowAll,
  filterMemorized,
  filterNeedPractice,
} from '../../redux/actions';

class Filter extends Component {
  getTextStyleFilter(statusName) {
    const {myFilter} = this.props;
    if (statusName === myFilter) {
      return {color: 'red', fontWeight: 'bold'};
    }
    return styles.buttonText;
  }

  // getFilterStatus(acctionType) {
  //   return this.props.dispatch({type: acctionType});
  // }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            this.props.filterShowAll();
          }}>
          <Text style={this.getTextStyleFilter('SHOW_ALL')}>SHOW ALL</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.filterMemorized();
          }}>
          <Text style={this.getTextStyleFilter('MEMORIZED')}>MEMORIZED</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.filterNeedPractice();
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

export default connect(mapStateToProps, {
  filterShowAll,
  filterMemorized,
  filterNeedPractice,
})(Filter);

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
