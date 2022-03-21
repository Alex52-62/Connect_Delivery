import { ADD_ORDERS_FROM_DB } from './actions';

const initialState = {
	orders: [],
	currentPageAdmin: 1,
	pageQtlAdmin: 2,
	currentPageHistory: 1,
	pageQtlHistory: 2,
};

export const ordersReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ADD_ORDERS_FROM_DB:
			var new_st = { ...state, orders: payload }; //[...state.orders, ...]
			// console.log('new_st', new_st, state);

			return new_st;
		case 'setPageAdmin':
			console.log('reducer', payload);
			new_st = { ...state, currentPageAdmin: payload };
			return new_st;
		case 'setPageHistory':
			console.log('reducer', payload);
			new_st = { ...state, currentPageHistory: payload };
			return new_st;
		default:
			return state;
	}
};
