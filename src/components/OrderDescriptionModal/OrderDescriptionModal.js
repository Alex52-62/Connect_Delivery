import { Modal, Typography, Box, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useStyles } from './OrderDescriptionModalStyle';

const OrderDescriptionModal = (props) => {
	const classes = useStyles();
	return (
		<Modal className={classes.modal} onClose={props.onClose} open={props.open}>
			<Box
				sx={{
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
					width: 570,
					bgcolor: 'background.paper',
					border: '2px solid #000',
					boxShadow: 24,
					padding: 4,
				}}
			>
				<Box className={classes.wrapper_flex}>
					<Typography variant='h6' component='h2'>
						Название доставки: {props.order.name}
					</Typography>
					<CloseIcon onClick={props.onClose} />
				</Box>

				<Typography sx={{ pt: 1 }}>
					Доставить до: {props.order.delivery_date}
				</Typography>
				<Typography sx={{ pt: 5 }}>Адрес доставки:</Typography>
				<Typography sx={{ pt: 2 }}> {props.order.address}</Typography>

				<Box className={classes.wrapper_flex_bottom}>
					<Typography variant='h6' component='h4'>
						{props.order.courier_name}
					</Typography>
					<Button className={classes.btn}>Перейти в чат</Button>
					<Typography variant='h6' component='h4'>
						{props.order.status}
					</Typography>
				</Box>
			</Box>
		</Modal>
	);
};

export default OrderDescriptionModal;
