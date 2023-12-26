import "./Modal.css";
const Modal = (props) => {
const toggle=()=>{
  props.toggle()
}

  return (
    
      <div className="dialog">
        <div className="dialog-content">
          <p>ERROR</p>
          <h1>{props.msg.show}</h1>
          <button onClick={toggle}>Close</button>
        </div>
      </div>
   
  );
}
export default Modal;
