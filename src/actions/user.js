import {REQUEST_LOGIN, REQUEST_LOGOUT, GET_USER_DRIVERS, REQUEST_NEW_DRIVER_ADD, REQUEST_DELETE_DRIVER } from "../constants/types";

export const loginAUser = (user) => ({
    type: REQUEST_LOGIN,
    user
});

export const getUserDrivers = (user) => ({
    type: GET_USER_DRIVERS,
    user
})

export const addNewDriverToUser = (user, driver) => ({
    type: REQUEST_NEW_DRIVER_ADD,
    user,
    driver
})

export const requestDeleteRecord = (driver) => ({
    type: REQUEST_DELETE_DRIVER,
    driver
})

export const logOutUser = () => ({
    type: REQUEST_LOGOUT
})
