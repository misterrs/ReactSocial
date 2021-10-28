import './App.css';
import * as React from 'react';
import { useState, useRef} from 'react';
import MessageList from './MessageList';
import ChatList from './Chats.jsx';
import MessageForm from './MessageForm.jsx';


function App() {
  const [message, setMessage] = useState('');
  const [messageList, setMesssageList] = useState([]);
  const ref = useRef(undefined);
  const user = "Michael";

 
  return (
    <div className="App">
      <header className="App-header">
        <MessageForm message ={message} user = {user} ref={ref} setMesssageList={setMesssageList} setMessage={setMessage} messageList={messageList}/>
      </header>
      <div className ="container">
        <ChatList/>
        <MessageList messageList={messageList} user={user} setMesssageList={setMesssageList}/>
      </div>
      
    </div>
  );
}
export default App;
