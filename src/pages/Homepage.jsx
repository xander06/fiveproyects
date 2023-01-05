import Todo from "../components/Todo";
import React, { useState } from 'react'

const Homepage = () => {
    const [title, setTitle] = useState("Hola");
    const [todos, setTodos] = useState([]);

    function handleChange(event) {
        const value = event.target.value;
        setTitle(value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        const newTodo = {
            id: crypto.randomUUID(),
            title: title,
            completed: false,
        }

        const temp = [...todos];
        temp.unshift(newTodo);
        setTodos(temp);
        setTitle("");
    }
    function handleUpdate(id, value) {
        const temp = [...todos];
        const item = temp.find(item => item.id === id);
        item.title = value;
        setTodos(temp);
    }

    function handleDelete(id) {
        const temp = todos.filter(item => item.id !== id);
        setTodos(temp);
    }


    return (
        <div className='todoContainer'>
            <form className='todoCreateForm' onSubmit={handleSubmit}>
                <input onChange={handleChange} className='todoInput' value={title} />
                <input
                    onClick={handleSubmit}
                    type="submit"
                    value="Create todo"
                    className='buttonCreate'
                />
            </form>
            <div className='todoContainer'>
                {todos.map(item => (
                    <Todo key={item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete} />
                ))
                }
            </div>
        </div>
    );
}
export default Homepage