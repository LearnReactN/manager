import {
  EMPLOYEES_FETCH_SUCESS
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEES_FETCH_SUCESS:
      console.log(action);
      //syntax to create a new key, value pair - where the key is the
      // id ([id]) of the record that we want to update
      // and the value (action.payload) is the updated record itself
      // return { ...state, [id]: action.payload };
      return action.payload;
    default:
      return state;
  }
};
