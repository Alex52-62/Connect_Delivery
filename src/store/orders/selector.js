export const selectOrders = (state) => state.orders.orders;

export const selectOrdersforPaginAdmin = (state) => {
	const { orders, currentPageAdmin, pageQtlAdmin } = state.orders;
	const startIndexAdmin = (currentPageAdmin - 1) * pageQtlAdmin;
	const endIndexAdmin = startIndexAdmin + pageQtlAdmin;
	const ordersAdmin = orders.slice(startIndexAdmin, endIndexAdmin);
	return ordersAdmin;
};
export const selectOrdersforPaginHistory = (state) => {
	const { orders, currentPageHistory, pageQtlHistory } = state.orders;
	const startIndexHistory = (currentPageHistory - 1) * pageQtlHistory;
	const endIndexHistory = startIndexHistory + pageQtlHistory;
	const ordersHistory = orders.slice(startIndexHistory, endIndexHistory);
	return ordersHistory;
};

export const selectOtyPage = (state) => {
	const { orders, pageQtl } = state.orders;
	const numerOfPages = Math.ceil(orders.length / pageQtl);
	return numerOfPages;
};
