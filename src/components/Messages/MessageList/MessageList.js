import {Box, Paper, Table, TableContainer} from "@mui/material";
import {List, ListItem} from "@mui/material";
import Message from "../Message/Message";
import React, {useCallback, useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectMessages} from "../../../store/messages/selector";
import {addMessageFb, initMessages} from "../../../store/messages/actions";
import AddForm from "../../AddForm/AddForm";

export const MessageList = ({chatId}) => {
    const scrollRef = useRef(null);
    const dispatch = useDispatch();
    const messageList = useSelector(selectMessages);

    useEffect(() => {
        dispatch(initMessages());
    }, []);

    const handleAddMessage = useCallback(( text, author) => {
            console.log('handleAddMessage', chatId, text, author)
            dispatch(addMessageFb(chatId, text, author));
        },
        [chatId]
    );

    useEffect(() => {
        if (scrollRef.current) {
            console.log('scrollRef',scrollRef.current)
            return scrollRef.current.scrollIntoView({ behaviour: "smooth" });
        }
    }, [messageList]);

    return (
        <Box sx={{ml: 8}}>
            <TableContainer
                component={Paper}
                sx={{
                    border: "4px solid rgba(0,0,0,0.2)",
                    padding: 1,
                    width: 600,
                    height: 600,
                    "&::-webkit-scrollbar": {
                        width: 20
                    },
                    "&::-webkit-scrollbar-track": {
                        backgroundColor: "rgba(0,0,0,0.2)"
                    },
                    "&::-webkit-scrollbar-thumb": {
                        backgroundColor: "rgba(0,0,0,0.5)",
                        borderRadius: 2
                    },
                    overflowX: "hidden",
                }}
            >
                <Table
                    sx={{
                        tableLayout: "auto",
                        width: 550,
                        //height: "max-content"
                    }}
                >
            <List >
                {Object.values(messageList[chatId] || []).map((message, i) => (
                      <Message key={message.id} text={message.text} author={message.author} id={message.id}  />
                ))}
                <ListItem ref={scrollRef} />
            </List>
                </Table>
            </TableContainer>
            <AddForm onAdd={handleAddMessage} rows='3'  label='Message' className='new_message' textButton='Отправить' chatId={chatId} />
        </Box>
    );
};
