import React, {Component} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';

import {connect} from 'react-redux';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      en: '',
      vn: '',
    };
  }

  onAdd = () => {
    const {en, vn} = this.state;
    this.props.dispatch({
      type: 'ADD_WORD',
      en,
      vn,
    });
  };

  render() {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'stretch',
        }}>
        <TextInput
          style={styles.textInput}
          value={this.state.en}
          onChangeText={text => this.setState({en: text})}
          placeholder={'English Word'}
        />
        <TextInput
          style={styles.textInput}
          value={this.state.vn}
          onChangeText={text => this.setState({vn: text})}
          placeholder={'Meaning'}
        />
        <TouchableOpacity onPress={this.onAdd}>
          <Text>Add</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    width: 300,
    backgroundColor: '#E4F6D4',
    margin: 10,
    paddingHorizontal: 10,
  },
});

export default connect()(Form);
