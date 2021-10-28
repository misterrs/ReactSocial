import './MessageForm.css';
import Massage from './massage.jsx';
import { TextField } from '@mui/material';
import { animateScroll as scroll } from "react-scroll";

const MessageForm = (props) => {
    const createComment = (e) => props.setMessage(e.target.value);

    const addComment = () => {
      props.setMesssageList([...props.messageList, {text:props.message, user:props.user}]);
      props.setMessage('');
      scroll.scrollToBottom("smooth");
    };
    return (
        <div className = "container">
            <Massage user = {props.user}/>
            <form className = "commentForm" action="#">
            <TextField 
            inputref = {props.ref} 
            value = {props.message} 
            onChange={createComment}
            label={props.user}
            variant="outlined"
            fullWidth
            focused
            />
            <button className = "commentBtn" onClick={addComment}>Send</button>
            </form>
        </div>
    );
}

export default MessageForm;
