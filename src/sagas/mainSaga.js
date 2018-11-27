import {all, put, takeLatest} from 'redux-saga/effects';
import {
    GET_USER_DRIVERS, REQUEST_LOGIN, REQUEST_NEW_DRIVER_ADD, SET_CURRENT_USER, DRIVER_ADD_ERROR, DRIVERS_RECEIVED,
    REQUEST_DELETE_DRIVER, REQUEST_LOGOUT
} from "../constants/types";
import {reqresURL} from "../constants/urls";
import axios from 'axios';

export function* requestLogin(params) {
    const email = params.user.email;
    const password = params.user.password;

    const json = yield axios.post(`${reqresURL}api/login`,
        {
            "email": email,
            "password": password
        }
    ).then(response => response.data);

    const token = json.token;

    localStorage.setItem('loginToken', token);
    localStorage.setItem('user', email);
    yield put({type: SET_CURRENT_USER, user: localStorage.setItem('user', email)});
    window.location.href = "/dashboard";
}

export function* getDrivers(params) {
    const email = params.user
    const json = yield axios.post(`api/drivers/getdrivers`,
        {"email": email}
    ).then(response => response.data)

    yield put({type: DRIVERS_RECEIVED, json: json})
}

export function* addNewDriver(params) {

    const driver = params.driver;
    driver['adminEmail'] = params.user;
    const json = yield axios.post(`api/drivers/savedriver`,
        {
            "driver": driver
        }).then(response => response.data)

    if (json === "Driver Exists") {
        yield put({type: DRIVER_ADD_ERROR, error: json})
    }
    else
        yield put({type: DRIVERS_RECEIVED, json: json})
}

export function* requestDeleteDriver(params) {
    const json = yield axios.post(`api/drivers/deletedriver`,
        {
            "driver": params.driver
        }).then(response => response.data)

    yield put({type: DRIVERS_RECEIVED, json: json})
}

export function* requestLogout() {
    localStorage.removeItem('loginToken');
    localStorage.removeItem('user');
    yield put({type: SET_CURRENT_USER, json: []})
    window.location.href = "/";
}


function* actionWatcher() {
    yield takeLatest(REQUEST_LOGIN, requestLogin);
    yield takeLatest(GET_USER_DRIVERS, getDrivers);
    yield takeLatest(REQUEST_NEW_DRIVER_ADD, addNewDriver);
    yield takeLatest(REQUEST_DELETE_DRIVER, requestDeleteDriver);
    yield takeLatest(REQUEST_LOGOUT, requestLogout);
}

export default function* rootSaga() {
    yield all([
        actionWatcher()
    ])
}
