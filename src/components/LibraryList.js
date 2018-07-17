import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, } from 'react-native';

class LibraryList extends Component {
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

export default connect()(LibraryList);
