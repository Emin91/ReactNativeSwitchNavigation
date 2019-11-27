import React, {Component} from 'react'
import {View, Text, Button} from 'react-native'
import {styles} from '../style/style'

class DetailsScreen extends Component {

    render() {
      return (
        <View style={styles.container}>
          <Text style={{ color: '#fff', fontSize: 50, }}>Details page</Text>
          <Button 
                title="Go to Home page"
                onPress={() => this.props.navigation.navigate('Home')}>
          </Button>
        </View>
      );
    }
  }

  export default DetailsScreen;