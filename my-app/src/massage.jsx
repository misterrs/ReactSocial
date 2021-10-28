import './App.css';

function Massage(props) {
  return (
    <div className="user">
      <p>Write message <span>{props.user}</span></p>
    </div>
  );
}

export default Massage;