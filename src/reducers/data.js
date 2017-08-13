import { UPDATE_DATA } from '../actions/data';

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_DATA:
      return Object.assign({}, state, action.data);
    default:
      return state;
  }
}
