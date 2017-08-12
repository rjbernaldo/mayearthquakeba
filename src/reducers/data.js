import { FETCH_DATA, UPDATE_DATA } from '../actions/data';

const initialState = {
  data: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_DATA:
      return initialState;
    default:
      return state;
  }
}
