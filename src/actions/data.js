export const FETCH_DATA = 'FETCH_DATA';
export const UPDATE_DATA = 'UPDATE_DATA';

export function fetchData(data) {
  return {
    type: FETCH_DATA,
    data,
  };
}

export function updateData() {
  return {
    type: UPDATE_DATA,
  };
}
