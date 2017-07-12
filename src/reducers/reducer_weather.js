import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  // redux-promise middleware will have resolved the promise so the action we recieve
  // will contain the resolved promise with data
  // console.log('Action recieved', action);

  switch(action.type) {
    case FETCH_WEATHER:
      // Do not return the below as it will mutate state
      // return state.push(action.payload.data);

      // Need to return a new copy of state with the old and new data combined
      // return state.concat([action.payload.data]);

      // Or use the ES6 shorthand below to do the same thing and concatenate the arrays
      return [ action.payload.data, ...state ];
  }

  return state;
}
