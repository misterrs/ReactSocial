import './App.css';
import Massage from './massage.jsx';
import { useState } from 'react';
import { useRef } from 'react'; 
import { useEffect } from 'react';
import MessageList from './MessageList';



const user = "Michael";

export const App = () => {
  const [text, setText] = useState('');
  const [messageList, setMesssageList] = useState([]);


  const ref = useRef(undefined);

  useEffect(() => {
    ref.current?.focus();
    }, [text]);

    // const result = messageList.map((mess, i) => {
    //   return <p key={i}>{mess}</p>;
    // });

  const createComment = (e) => setText(e.target.value);
  function addComment () {
    setMesssageList([...messageList, text]);


  }
  return (
    <div className="App">
      
      <header className="App-header">
        <Massage user = {user}/>
        <form class = "commentForm" action="#">
        <textarea inputref = {ref} value = {text} onChange={createComment}/>
        <button onClick={addComment}>Comment</button>
        </form>
      </header>
      <div class="comments">
        <MessageList messageList={messageList} user={user}></MessageList>
      </div>
    </div>
  );
}

export default App;
