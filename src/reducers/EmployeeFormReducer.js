import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEE_SAVE_SUCCESS
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

      case EMPLOYEE_CREATE:
      // NOTE:When we created a new record over an firebase that does not
      // automatically clear out all the state that is in our EmployeeFormReducer for us.
      // the form(CreateEmployee) is going to show whatever data is sitting inside this reducerr
      // or produced by this reducer.
      // Because we save it does not mean that state gets automatically cleared.
      // We can dispatch and Action from (EmployeeActions)
        return INITIAL_STATE;

      case EMPLOYEE_SAVE_SUCCESS:
        return INITIAL_STATE;
    default:
     return state;
}
};
