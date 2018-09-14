import firebase from 'firebase';
import { EMAIL_CHANGED, PASSWORD_CHANGED } from './types';

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
  firebase.auth().signInWithEmailAndPassword(email, password)
   .then(user => {
     dispatch({ type: 'LOGIN_USER_SUCESS', payload: user });
   });
 };
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
