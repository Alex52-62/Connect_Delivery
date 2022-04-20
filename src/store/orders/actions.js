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

export const CHANGE_ORDERS_IN_DB_PENDING = "ORDERS::CHANGE_ORDERS_IN_DB_PENDING"
export const CHANGE_ORDERS_IN_DB_SUCCESS = "ORDERS::CHANGE_ORDERS_IN_DB_SUCCESS"
export const CHANGE_ORDERS_IN_DB_FAILURE = "ORDERS::CHANGE_ORDERS_IN_DB_FAILURE"

export const changeOrderInDBPending = () => ({
    type: CHANGE_ORDERS_IN_DB_PENDING,
});
export const changeOrderInDBSuccess = (data) => ({
    type: CHANGE_ORDERS_IN_DB_SUCCESS,
    payload: data
});
export const changeOrderInDBFailure = (error) => ({
    type: CHANGE_ORDERS_IN_DB_FAILURE,
    payload: error
});

export const changeOrder = (data) => async (dispatch) => {
    dispatch(changeOrderInDBPending());
    // console.log('changeOrder', data)

    try {
        const response = await fetch(`https://xn--l1aej.pw/api/admin/orders/${data.id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                mode:'cors'
            },
            body: JSON.stringify(Object.assign({data}, {'auth-token': localStorage.getItem('auth-token')}))
        });

        if (!response.ok) {
            // console.log('response.ok', response.ok);
            throw new Error(`error ${response.status}`);
        };

        const result = await response.json();

        // console.log('result', result);

        dispatch(changeOrderInDBSuccess(result.updatedOrder));
    } catch (e) {
        // console.log('error', e);
        dispatch(changeOrderInDBFailure(e.message));
    }
};


export const REGISTR_ORDERS_IN_DB = "ORDERS::REGISTR_ORDERS_IN_DB"
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