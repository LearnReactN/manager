import {
  EMPLOYEE_UPDATE
} from './types';

//ES6 expection this action creator, will be called with
//an object containing a prop a value key

export const employeeUpdate = ( { prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};
