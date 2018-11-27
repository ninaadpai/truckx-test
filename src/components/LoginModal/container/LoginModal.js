import {connect} from 'react-redux';
import {loginAUser} from "../../../actions/user";
import LoginModal from "../component/LoginModal";

const mapStateToProps = (state) => {
    return {
        state: state
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: (user) => dispatch(loginAUser(user)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);
