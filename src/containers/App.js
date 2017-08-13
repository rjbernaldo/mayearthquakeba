import { connect } from 'react-redux';
import App from '../components/App';
import { fetchData } from '../actions/data';

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => {
      dispatch(fetchData());
    },
  };
};

export default connect(null, mapDispatchToProps)(App);
