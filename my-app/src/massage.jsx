import './App.css';

function Massage(props) {
  return (
    <div className="comment">
      Комментарий: {props.comment}
    </div>
  );
}

export default Massage;