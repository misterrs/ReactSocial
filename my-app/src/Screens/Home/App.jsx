import '../../App.css';
import * as React from 'react';
import { useState, useRef} from 'react';
import MessageList from '../../MessageList';
import ChatList from '../../Chats.jsx';
import MessageForm from '../../MessageForm.jsx';


export const App = () => {
  const [message, setMessage] = useState('');
  const [messageList, setMesssageList] = useState([]);
  const ref = useRef(undefined);
  const user = "Michael";

 
  return (
    <div className="App">
     
      <footer className="App-footer">
        <MessageForm message ={message} user = {user} ref={ref} setMesssageList={setMesssageList} setMessage={setMessage} messageList={messageList}/>
      </footer>
      <div className ="container">

        <ChatList/>
        <MessageList messageList={messageList} user={user} setMesssageList={setMesssageList}/>
      </div>
    </div>
  );
}
