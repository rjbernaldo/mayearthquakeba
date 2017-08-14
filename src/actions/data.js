export const UPDATE_DATA = 'UPDATE_DATA';

const URL = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&latitude=11.6899014&longitude=122.3708869&maxradiuskm=1150&limit=1&orderby=time';

export function fetchData() {
  return (dispatch) => {
    return fetch(URL).then(
      data => data.json(),
      error => console.log(error),
    ).then(json => dispatch(updateData(json)));
  };
}

export function updateData(data) {
  return {
    type: UPDATE_DATA,
    data,
  };
}
