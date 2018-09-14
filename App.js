/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm';

type Props = {};
export default class App extends Component<Props> {
componentWillMount() {
  const config = {
    apiKey: 'AIzaSyBS0p7nD67IglZgXk-ToiYeFApbjabUT8s',
    authDomain: 'manager-59c39.firebaseapp.com',
    databaseURL: 'https://manager-59c39.firebaseio.com',
    projectId: 'manager-59c39',
    storageBucket: 'manager-59c39.appspot.com',
    messagingSenderId: '898655271593'
  };

  firebase.initializeApp(config);
}


  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}
