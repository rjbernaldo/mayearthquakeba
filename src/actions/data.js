export const FETCH_DATA = 'FETCH_DATA';
export const UPDATE_DATA = 'UPDATE_DATA';

const URL = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&latitude=11.6899014&longitude=122.3708869&maxradiuskm=1150&limit=10&orderby=time';

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
