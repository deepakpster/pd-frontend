import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import App from '../../components/App';
import { withRouter } from 'react-router-dom';
import { dashboardActions } from '../../actions';


export default withRouter(connect(
  (state, props) => ({
      ...state,
      ...props,
  }),
  (dispatch => ({
      dashboardActions: bindActionCreators(dashboardActions, dispatch),
  })),
)(App));
