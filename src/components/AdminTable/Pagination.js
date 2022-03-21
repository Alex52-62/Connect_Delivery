import Pagination from '@mui/material/Pagination';
import { Stack, Box } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { selectOtyPage } from '../../store/orders/selector';

const PaginationComponent = (props) => {
	const dispatch = useDispatch();
	const numberOfPages = useSelector(selectOtyPage);
	let [page, setPage] = useState(1);
	const handleChange = (type, p) => {
		if (props.type === 'AdminInWork') {
			dispatch({ type: 'setPageAdmin', payload: p });
			setPage(p);
			console.log('compAdmin', p);
		}

		if (props.type === 'AdminHistory') {
			dispatch({ type: 'setPageHistory', payload: p });
			setPage(p);
			console.log('compHistoty', p);
		}
	};
	return (
		<Box>
			<Stack spacing={2}>
				<Pagination
					count={numberOfPages}
					page={page}
					style={{ margin: 30 }}
					onChange={handleChange}
				/>
			</Stack>
		</Box>
	);
};
export default PaginationComponent;
