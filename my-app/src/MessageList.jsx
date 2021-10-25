


const MessageList= (props) => {
    return (
        <div>
        {props.messageList.map((message, i,) => (
            <p class="comment" key={i}>{message}<span>{props.user}</span></p>
        ))}
        </div>
    );
};

export default MessageList;