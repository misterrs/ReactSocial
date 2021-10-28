import './chats.css';
import { datatype } from 'faker/locale/zh_TW';
import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';



const ChatList = () => {

    const chats = [
        {name: "Achat#1", id: datatype.uuid(), text: "Lists are a continuous group of text or images."},
        {name: "Wchat#1", id: datatype.uuid(), text: "Lists are a continuous group of text or images."},
        {name: "Dchat#1", id: datatype.uuid(), text: "Lists are a continuous group of text or images."},
        {name: "Rchat#1", id: datatype.uuid(), text: "Lists are a continuous group of text or images."}
    ];

    return (
        <div className = "chatHolder">
            {chats.map(({name, id, text}) => (
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                    <Avatar alt= {name} src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                    primary={text}
                    secondary={
                        <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            Ali Connors
                        </Typography>
                        {id}
                        </React.Fragment>
                    }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                </List>
            ))}
        </div>
    );
}


export default ChatList;