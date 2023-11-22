import { GET_ERRORS } from "../actions/types";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      // Ensure that action.payload is transformed into an object
      return typeof action.payload === 'string' ? { message: action.payload } : action.payload;
    default:
      return state;
  }
}
