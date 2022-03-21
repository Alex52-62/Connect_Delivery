import * as React from 'react';
import { useEffect, useState } from 'react';
import MyMap from '../Map/map.js';
import { Box, Divider } from '@mui/material';
import AdminInWork from './AdminInWork/AdminInWork';
import AdminHistory from './AdminHistory/AdminHistory';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders } from '../../store/orders/actions';
import { selectCouriers } from '../../store/couriers/selector';
import { selectOrders } from '../../store/orders/selector';
import { fetchCouriers } from '../../store/couriers/actions';
import { AdminMenu } from '../AdminMenu/AdminMenu';
import { Chat } from '../Chat/Chat';
import TemporaryDrawer from '../../utils/Menu';
import { CouriersOperation } from './CouriersOperation/CouriersOperation';
import { CourierRegistration } from './CourierRegistration/CourierRegistration';

export const AdminTable = () => {
	const [option, setOption] = useState('0');

	const onMenuItemClick = (option) => {
		setOption(option);
	};

	const dispatch = useDispatch();
	useEffect((event) => {
		dispatch(fetchOrders());
		dispatch(fetchCouriers());
	}, []);

	const orders = useSelector(selectOrders);
	const couriers = useSelector(selectCouriers);

	const renderOptionalComponent = (option) => {
		switch (option) {
			case '1':
				return <Chat setOption={setOption} />;
			case '2':
				return (
					<MyMap
						name={'Местонахождение курьеров'}
						couriers={couriers}
						orders={orders}
					/>
				);
			case '3':
				return <CouriersOperation />;
			case '4':
				return <CourierRegistration />;
			default:
				return (
					<Box>
						<AdminInWork setOption={setOption} />
						<Divider variant='string' sx={{ mt: 5, mb: 3 }} />
						<AdminHistory />
					</Box>
				);
		}
	};

	return (
		<Box sx={{ width: '100%', typography: 'body1' }}>
			<TemporaryDrawer menuContent={AdminMenu} onClick={onMenuItemClick} />
			{renderOptionalComponent(option)}
		</Box>
	);
};
