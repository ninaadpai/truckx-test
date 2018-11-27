import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import DriverForm from "../component/DriverForm";
import {addNewDriverToUser} from "../../../actions/user";

function mapStateToProps(state) {
    return {
        state: state,
        user: state.auth.user,
        loading: state.auth.loading,
        error: state.auth.errors
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addNewDriver: (user, driver) => dispatch(addNewDriverToUser(user, driver))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DriverForm);
