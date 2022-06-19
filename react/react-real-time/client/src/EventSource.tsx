import React, {FC, useEffect, useState} from 'react';
import {Box, Button, Paper, TextField} from "@mui/material";
import axios from "axios";

interface IMessage {
    id: string
    message: string
}

const LongPolling: FC = () => {
    const [messages, setMessages] = useState<IMessage[]>([])
    const [inputValue, setInputValue] = useState<string>('')

    useEffect(() => {
        subscribe()
    }, [])

    const subscribe = async () => {
        try {
            const {data} = await axios.get<IMessage>('http://localhost:5000/get-messages')
            setMessages((prev) => [...prev, data])
            await subscribe()
        } catch (e) {
            setTimeout(() => {
                subscribe()
            }, 500)
        }
    }


    const sendMessage = async () => {
        await axios.post('http://localhost:5000/new-message', {
            headers: {
                'Cache-Control': 'no-cache, no-transform'
            },
            id: Date.now(),
            message: inputValue,
        })
    }

    return (
        <Box>
            <Paper>
                <TextField
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <Button
                    onClick={sendMessage}
                >Send</Button>
            </Paper>
            <Box>
                {messages.map(mess =>
                    <Box key={mess.id}>
                        {mess.message}
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default LongPolling;