import React from 'react';

const Todo = props => {
    return (
        <div
            onClick={() => props.completedTodo(props.todo.id)}
            className={`todo${props.todo.completed === true ? " completed" : ""}`}
        >
            <li>{props.todo.name}</li>            
        </div>
    )
}

export default Todo;