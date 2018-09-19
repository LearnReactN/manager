import {
  EMPLOYEE_UPDATE
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      //action.payload === { prop: 'name', value: 'jane' }

      //const newState = {};
      //instead of declare object
      //newState[action.payload.prop] = action.payload.value
      //and then have to say Action payload prop equals action.
      // we use Key interpellation saves these steps
      // if we call action creator with a prop of name/shift
      //[action.payload.prop]: this will turn into name/shift
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
     return state;
}
};
