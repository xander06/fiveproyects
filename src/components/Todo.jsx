/*import PropTypes from 'prop-types'*/
import React, { useState } from 'react'

const Todo = () => {
  const [title, setTitle] = useState("Hola");
  
  function handleClic(e) {
    e.preventDefault();
    setTitle("Marcos")
  }

  function handleChange(event) {
    const value = event.target.value;
    setTitle(value);
  }

  return (
    <div className='todoContainer'>
      <div className='todoCreateForm'>
        <input onChange={handleChange} className='todoInput' value={title} />
        <input
          onClick={handleClic}
          type="submit"
          value="Create todo"
          className='buttonCreate'
        />
      </div>
      {title}
    </div>
 )
}
export default Todo