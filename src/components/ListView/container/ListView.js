import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ListView from "../component/ListView";
import {getUserDrivers, logOutUser, requestDeleteRecord} from "../../../actions/user";

const mapStateToProps =(state) => {
    return {
        state: state,
        user: state.auth.user,
        drivers: state.auth.drivers,
        driversLoading: state.auth.driversLoading
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getDrivers: (user) => dispatch(getUserDrivers(user)),
        deleteThisRecord: (driver) => dispatch(requestDeleteRecord(driver)),
        logOut: () => dispatch(logOutUser())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListView);
