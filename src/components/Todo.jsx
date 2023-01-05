/*import PropTypes from 'prop-types'*/
import { useState } from "react";

const Todo = ({item, onUpdate, onDelete }) => {
  const [isEdit, setIsEdit] = useState(false);
  

  function FormEdit(){
    const [newValue, setNewValue]= useState(item.title);
    function handleSubmit(e){
      e.preventDefault();
    }
  
    function handleChange(e){
      const value = e.target.value;
     setNewValue(value);
    }

    function handleClickUpadateTodo(){
      onUpdate(item.id,newValue);
      setIsEdit(false);
    }

    return(
    <form className="todoUpdateForm" onSubmit={handleSubmit}>
      <input className="todoInput" type="text" onChange ={handleChange} value={newValue}/>
      <button className="button" onClick={handleClickUpadateTodo}>Update</button>
    </form>
    );
  }

  function TodoElement(){
    return(
      <div className="todoInfo"> {item.title} 
      <button onClick={() => setIsEdit(true)}>Edit</button>
      <button onClick={(e) => onDelete(item.id)}>Delete</button>
       </div>
    )
  }

  return (
    <div className="todo">
      {isEdit ? <FormEdit /> : <TodoElement/> }
    </div>
   );
}
export default Todo