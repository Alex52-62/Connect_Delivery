import { couriers } from '../../../utils/data';
import {
	Box,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Avatar,
	IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import MailIcon from '@mui/icons-material/Mail';

import { Demo, StyledBadge } from './ChatListStyle';

export default function ChatList(props) {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				maxWidth: 350,
				marginLeft: 50, //сдвинуто вправо чтобы видеть пока не поправлено меню.
			}}
		>
			<Demo sx={{ mt: 15, mb: 2 }}>
				<List sx={{ display: 'flex', flexDirection: 'column' }}>
					{couriers.map((courier) => {
						return (
							<ListItem
								key={courier.id}
								secondaryAction={
									<IconButton edge='end' aria-label='delete'>
										<DeleteIcon />
									</IconButton>
								}
							>
								<ListItemAvatar>
									<Avatar>
										<StyledBadge badgeContent={1}>
											<MailIcon color='action' />
										</StyledBadge>
									</Avatar>
								</ListItemAvatar>
								<ListItemText primary={courier.name} />
							</ListItem>
						);
					})}
				</List>
			</Demo>
		</Box>
	);
}
