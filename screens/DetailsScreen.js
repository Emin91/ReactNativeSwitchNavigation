import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {styles} from '../style/style'

class DetailsScreen extends Component {

    render() {
      return (
        <View style={styles.container}>
          <Text style={{ color: '#fff', fontSize: 50, }}>Details page</Text>
        </View>
      );
    }
  }

  export default DetailsScreen;