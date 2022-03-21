import { Box } from '@mui/material';
import ChatList from '../Chat/ChatList/ChatList';
export const Chat = () => {
	return (
		<Box>
			<header>
				<h3>Чат с администратором</h3>
			</header>
			<ChatList />
		</Box>
	);
};
