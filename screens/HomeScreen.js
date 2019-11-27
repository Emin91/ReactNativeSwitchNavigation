import React, {Component} from 'react'
import {View, Text, Button} from 'react-native'
import {styles} from '../style/style'

class HomeScreen extends Component {

    render() {
      return (
        <View style={styles.container}>
          <Text style={{ color: '#fff', fontSize: 50, }}>Home page</Text>
          <Button 
                title="Go to Details page"
                onPress={() => this.props.navigation.navigate('Details')}>
          </Button>
        </View>
      );
    }
  }

  export default HomeScreen;