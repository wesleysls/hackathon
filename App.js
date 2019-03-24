import React, { Component } from 'react';
import { View, Text, StyleSheet,Button,FlatList,TouchableHighlight,Image,StatusBar,Modal,TouchableOpacity,TextInput} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import Reducers from './src/Reducers';
import Inicio from './src/screens/Inicio';
import Preload from './src/screens/Preload';
import SignIn from './src/screens/SignIn';
import Step1 from './src/screens/Step1';
import SignUp_Socorrista from './src/screens/SignUp_Socorrista';
import SignUp_Morador from './src/screens/SignUp_Morador';
import ForgotPassword from './src/screens/ForgotPassword';

console.disableYellowBox = true;

let store = createStore(Reducers, applyMiddleware(ReduxThunk));

const Navegador = StackNavigator({
  Preload:{
    screen:Preload
  },

  SignIn:{
    screen:SignIn
  },

  Step1:{
    screen:Step1
  },
  
  Inicio:{
    screen:Inicio,
    navigationOptions:{
            header:null
        }
  },

  SignUp_Morador:{
    screen:SignUp_Morador
  },

  SignUp_Socorrista:{
    screen:SignUp_Socorrista
  },

  ForgotPassword:{
     screen:ForgotPassword
  },
  
});

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navegador />
      </Provider>
    );
  }
}