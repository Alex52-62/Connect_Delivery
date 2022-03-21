import {
	Table,
	TableBody,
	TableContainer,
	TableHead,
	Typography,
	Paper,
} from '@mui/material';

import { StyledTableCell, StyledTableRow } from './AdminHistoryStyle.js';
import { getCurrentCourier } from '../../../utils/getData';
import { useSelector } from 'react-redux';
import { selectOrdersforPaginHistory } from '../../../store/orders/selector';
import PaginationComponent from '../Pagination';

const getCurrentCourierName = (courierID) => {
	if (courierID === 'undefined' || courierID === '') {
		return '';
	}
	if (getCurrentCourier(courierID).length === 0) {
		return '';
	} else {
		return getCurrentCourier(courierID)[0].name;
	}
};

const AdminHistory = () => {
	const orders = useSelector(selectOrdersforPaginHistory);

	return (
		<>
			<Typography variant='h6' component='h2'>
				История
			</Typography>

			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 700 }} aria-label='customized table'>
					<TableHead>
						<StyledTableRow>
							<StyledTableCell>ID</StyledTableCell>
							<StyledTableCell align='center'>АДРЕС ДОСТАВКИ</StyledTableCell>
							<StyledTableCell align='center'>КОММЕНТАРИЙ</StyledTableCell>
							<StyledTableCell align='center'>СТАТУС</StyledTableCell>
							<StyledTableCell align='center'>НАИМЕНОВАНИЕ</StyledTableCell>
							<StyledTableCell align='center'>КУРЬЕР</StyledTableCell>
							<StyledTableCell align='center'>СООБЩЕНИЕ</StyledTableCell>
						</StyledTableRow>
					</TableHead>
					<TableBody>
						{orders.map((row) => (
							<StyledTableRow key={row.id}>
								<StyledTableCell component='th' scope='row'>
									{row.id}
								</StyledTableCell>
								<StyledTableCell align='center'>{row.address}</StyledTableCell>
								<StyledTableCell align='center'>{row.comment}</StyledTableCell>
								<StyledTableCell align='center'>{row.status}</StyledTableCell>
								<StyledTableCell align='center'>{row.name}</StyledTableCell>
								<StyledTableCell align='center'>
									{getCurrentCourierName(row.user_id)}
								</StyledTableCell>
								<StyledTableCell align='center'>{'1'}</StyledTableCell>
							</StyledTableRow>
						))}
					</TableBody>
				</Table>
				<PaginationComponent type='AdminHistory' />
			</TableContainer>
		</>
	);
};

export default AdminHistory;
