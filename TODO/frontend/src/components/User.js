import React from 'react';

const UserItem = ({ user }) => {
    return (
        <tr>
            <td>
                {user.user_name}
            </td>
            <td>
                {user.first_name}
            </td>
            <td>
                {user.last_name}
            </td>
        </tr>
    )
}

const UserList = ({ users }) => {
    return (
        <table>
            <th>
                User_name
            </th>
            <th>
                First_Name
            </th>
            <th>
                Last_Name
            </th>
            {users.map((user) => <UserItem user={user} />)}
        </table>
    )
}
export default UserList