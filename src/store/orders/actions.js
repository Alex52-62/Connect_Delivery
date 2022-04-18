const axios = require('axios').default;

axios.defaults.withCredentials = true;

export const SET_PAGE_ADMIN = "ORDERS::SET_PAGE_ADMIN"
export const setPageAdmin = (payload) => ({
    type: SET_PAGE_ADMIN,
    payload: payload,
});

export const SET_PAGE_HISTORY = "ORDERS::SET_PAGE_HISTORY"
export const setPageHistory = (payload) => ({
    type: SET_PAGE_HISTORY,
    payload: payload,
});

export const GET_ORDERS_FROM_DB = "ORDERS::GET_ORDERS_FROM_DB"
export const getOrdersFromDB = (payload) => ({
    type: GET_ORDERS_FROM_DB,
    payload: payload,
});

export const getOrders = () => {
    return function (dispatch) {
        fetch(`https://xn--l1aej.pw/api/admin/orders?auth-token=${localStorage.getItem("auth-token")}`)
            .then(response => {
                console.log('json1', response)
                return response.json()

            })
            .then(json => {
                console.log('json', json)
                return dispatch(getOrdersFromDB(json.data))
            })
    };
};


export const CHANGE_ORDERS_IN_DB = "ORDERS::CHANGE_ORDERS_IN_DB"
export const changeOrderInDB = (payload) => ({
    type: CHANGE_ORDERS_IN_DB,
    payload: payload
});

export const changeOrder = (data) => {
    return function (dispatch) {
        fetch(`https://xn--l1aej.pw/api/admin/orders/${data.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                mode: 'cors'
            },
            body: JSON.stringify(Object.assign({data}, {'auth-token': localStorage.getItem('auth-token')}))
        })
            .then(response => {
                // console.log('json1 changeOrderInDB', response)
                return response.json()

            })
            .then(json => {
                return dispatch(changeOrderInDB(json.updatedOrder))
            })
            .catch(err => console.log('err', err))
    };
};

export const REGISTR_ORDERS_IN_DB = "COURIERS::REGISTR_ORDERS_IN_DB"
export const registrOrderInDB = (payload) => ({
    type: REGISTR_ORDERS_IN_DB,
    payload: payload
});

export const registrOrder = (data) => {

    return function (dispatch) {

        fetch(`https://xn--l1aej.pw/api/admin/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                "X-Requested-With": "XMLHttpRequest",
                'Accept': 'application/json',
                // 'mode':'cors'
            },
            body: JSON.stringify(Object.assign({data}, {'auth-token': localStorage.getItem('auth-token')}))
        })
            .then(response => {
                return response.json()

            })
            .catch(err => console.log('err', err))
    }
}