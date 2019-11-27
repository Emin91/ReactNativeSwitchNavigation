import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {styles} from '../style/style'

class HomeScreen extends Component {

    render() {
      return (
        <View style={styles.container}>
          <Text style={{ color: '#fff', fontSize: 50, }}>Home page</Text>
        </View>
      );
    }
  }

  export default HomeScreen;