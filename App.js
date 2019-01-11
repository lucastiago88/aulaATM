

import React, {Component} from 'react';
import CenaPrincipalScreen from './src/components/CenaPrincipalScreen';
import CenaClientesScreen from './src/components/CenaClientesScreen';
import { createStackNavigator, createAppContainer } from "react-navigation";



 class App extends Component{
  render() {
    return (
      <AppNavigator/>
    );
  }
}


const AppNavigator = createStackNavigator(
  {
    Home: CenaPrincipalScreen,
    Clientes: CenaClientesScreen
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);