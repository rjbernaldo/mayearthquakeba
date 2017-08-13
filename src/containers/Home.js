import { connect } from 'react-redux';
import Home from '../components/Home';

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

export default connect(mapStateToProps)(Home);
