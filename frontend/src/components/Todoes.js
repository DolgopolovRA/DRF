import React from 'react';
import { Link } from 'react-router-dom';

const TodotItem = ({ todo, deleteToDo }) => {
    return (
        <thead>
            <tr>
                <td>
                    {todo.id}
                </td>
                <td>
                    {todo.project}
                </td>
                <td>
                    {todo.user}
                </td>
                <td>
                    {todo.text}
                </td>
                <td>
                    {todo.is_active}
                </td>
                <td><button onClick={() => deleteToDo(todo.id)} type='button'>Delete</button></td>
            </tr>
        </thead>

    )
}

const TodoList = ({ todoes, deleteToDo }) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>
                            ID
                        </th>
                        <th>
                            Project
                        </th>
                        <th>
                            User
                        </th>
                        <th>
                            Text
                        </th>
                        <th>
                            Active
                        </th>
                    </tr>
                </thead>
                {todoes.map((todo) => <TodotItem todo={todo} deleteToDo={deleteToDo} />)}
            </table>
            <Link to='/todoes/create'>Create</Link>
        </div>
    )
}
export default TodoList