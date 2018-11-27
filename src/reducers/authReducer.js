import {
    DRIVER_ADD_ERROR, DRIVERS_RECEIVED, GET_USER_DRIVERS, REQUEST_NEW_DRIVER_ADD,
    SET_CURRENT_USER
} from "../constants/types";

const initialState = {
    user: "",
    loading: false,
    driversLoading: true,
    errors: "",
    drivers: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                user: action.user,
                loading: false
            }

        case GET_USER_DRIVERS:
            return{
                ...state,
                driversLoading: true,
                drivers: []
            }

        case DRIVERS_RECEIVED:
            return {
                ...state,
                loading: false,
                driversLoading: false,
                drivers: action.json
            }

        case REQUEST_NEW_DRIVER_ADD:
            return {
                ...state,
                loading: true
            }

        case DRIVER_ADD_ERROR:
            return {
                ...state,
                errors: action.error
            }
        default:
            return state
    }
}
