import { datatype } from 'faker/locale/zh_TW';
import './messageList.css';
import { animateScroll as scroll } from "react-scroll";
import {useEffect } from 'react';


const MessageList= (props) => {
    const answerBot = () => {
        setTimeout(
          () => 
          props.setMesssageList([
            ...props.messageList,
            {text:"hello i'm Bot. What is your name?", user:"RoBot" },
          ]),
          1500
        );
      };
    
      const scrollToBottom = () => {
        setTimeout(() =>
          scroll.scrollToBottom("smooth"),
          1500
        )
      }
    
      useEffect(() => {
        if (props.messageList[props.messageList.length - 1]?.user === props.user) {
          answerBot();
          scrollToBottom();
          return () => clearTimeout(answerBot, scrollToBottom);
        }
      }, );
    return (
        <div className="comments">
        {props.messageList.map(({text, user}) => (
            <p className= "comment" key={datatype.uuid()}>{text}<span>{user}</span></p>
        ))}
        </div>
    );
};

export default MessageList;