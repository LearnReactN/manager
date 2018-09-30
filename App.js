/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'; //to include any type of middleware we have to import a helper from redux thunk
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk'; // middleware to our redux app
import reducers from './src/reducers';
import Router from './src/Router';

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
