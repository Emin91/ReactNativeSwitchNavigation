import React, {Component} from 'react'
import {createSwitchNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from './screens/HomeScreen'
import DetailsScreen from './screens/DetailsScreen'

class App extends Component {

  render() {
    return <AppContainer />;
  }
}

export default App;


const AppSwithContainer = createSwitchNavigator({
  Home: HomeScreen,
  Details: DetailsScreen,
},
{
  initialRouteName: 'Home',
}
);

const AppContainer = createAppContainer(AppSwithContainer)