import React from 'react';

const TodotItem = ({ todo }) => {
    return (
        <thead>
            <tr>
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
            </tr>
        </thead>

    )
}

const TodoList = ({ todoes }) => {
    return (
        <table>
            <thead>
                <tr>
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
            {todoes.map((todo) => <TodotItem todo={todo}/>)}
        </table>
    )
}
export default TodoList