import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

//define action create
export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });

  firebase.auth().signInWithEmailAndPassword(email, password)
   .then(user => loginUserSucess(dispatch, user))
   .catch((error) => {
     console.log(error);

     firebase.auth().createUserWithEmailAndPassword(email, password)
     .then(user => loginUserSucess(dispatch, user))
     .catch(() => loginUserFail(dispatch));
   });
 };
};

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSucess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCESS,
    payload: user
  });

  Actions.main();
  //where this employeeList came from? its from Router.js
  // we created a Scene and added a key to it of EmployeeList
  // Any key we added to our Scene are instantly transcribed onto
  // the actions object above.
  // So any time we want to navigate between one Scene and another
  // we can call actions.Sceneanme (actions.employeeList)
 };

//Default Action Creator Rules
// .Action creator are functions
// .Must return an action
// .An action is an object with a 'type' property
// and optionally a payload as well
//{So the whole point of redux-thunk is to allow us
// to bend these rules that is really what it does.}
// it allows us to bend the rules if action creators

// Action Creator Rules with Thunk
// Action creators are functions | or | Action creators are functions
// Must return an action         | or | Must return a function
// An action is an object with a | or | This function will be called
// 'type' property                      with 'dispatch'
