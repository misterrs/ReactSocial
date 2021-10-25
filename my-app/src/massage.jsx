import './App.css';

function Massage(props) {
  return (
    <div className="user">
      Hello <span>{props.user}</span> !!!!
    </div>
  );
}

export default Massage;