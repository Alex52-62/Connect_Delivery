import { useSelector } from 'react-redux';
import { useState } from 'react';
import {
	Table,
	TableBody,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
	Paper,
	Box,
	FormControl,
	NativeSelect,
	Stack,
	Button,
} from '@mui/material';

import { getCouriersOnline } from '../../../utils/getData';
import { selectOrdersforPaginAdmin } from '../../../store/orders/selector';
import { StyledTableCell, StyledTableRow, useStyles } from './AdminInWorkStyle';
import PaginationComponent from '../Pagination';
import OrderDescriptionModal from '../../OrderDescriptionModal/OrderDescriptionModal';

const AdminInWork = ({ setOption }) => {
	const classes = useStyles();

	let [openModal, setOpenModal] = useState(null);

	const orders = useSelector(selectOrdersforPaginAdmin);

	const onClickHandle = (id) => {
		console.log('onClickHandle', id);
		setOpenModal(id);
	};
	const onCloseHandle = (event) => {
		event.stopPropagation();
		console.log('onClose');
		setOpenModal(null);
	};
	return (
		<Box>
			<Box className={classes.wrapper_flex}>
				<Typography variant='h4' component='h1'>
					Стас Администратор
				</Typography>
				<Stack spacing={2} direction='row'>
					<Button
						className={classes.btn}
						variant='contained'
						onClick={() => {
							setOption('1');
						}}
					>
						У ВАС СООБЩЕНИЕ
					</Button>
				</Stack>
			</Box>
			<Typography variant='h6' component='h2'>
				В обработке
			</Typography>

			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 700 }}>
					<TableHead>
						<TableRow>
							<StyledTableCell>ID</StyledTableCell>
							<StyledTableCell align='center'>АДРЕС ДОСТАВКИ</StyledTableCell>
							<StyledTableCell align='center'>НАИМЕНОВАНИЕ</StyledTableCell>
							<StyledTableCell align='center'>КОММЕНТАРИЙ</StyledTableCell>
							<StyledTableCell align='center'>КУРЬЕР</StyledTableCell>
						</TableRow>
					</TableHead>

					<TableBody>
						{orders.map((row) => (
							<StyledTableRow key={row.id}>
								<StyledTableCell
									component='th'
									scope='row'
									onClick={() => onClickHandle(row.id)}
								>
									{row.id}
									{openModal === row.id && (
										<OrderDescriptionModal
											order={row}
											open={!!openModal}
											onClose={onCloseHandle}
										/>
									)}
								</StyledTableCell>
								<StyledTableCell align='center'>{row.address}</StyledTableCell>
								<StyledTableCell align='center'>{row.name}</StyledTableCell>
								<StyledTableCell align='center'>{row.comment}</StyledTableCell>
								<StyledTableCell align='center'>
									<Box sx={{ minWidth: 120 }}>
										<FormControl fullWidth>
											<NativeSelect>
												<option value={10}>Не назначено</option>
												{getCouriersOnline().map((item) => (
													<option value={item.id} key={item.id}>
														{item.name}
													</option>
												))}
											</NativeSelect>
										</FormControl>
									</Box>
								</StyledTableCell>
							</StyledTableRow>
						))}
					</TableBody>
				</Table>
				<PaginationComponent type='AdminInWork' />
			</TableContainer>
		</Box>
	);
};

export default AdminInWork;
