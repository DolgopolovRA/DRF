import React from 'react';

const UserItem = ({ user }) => {
    return (
        <thead>
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
        </thead>

    )
}

const UserList = ({ users }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>
                        User_name
                    </th>
                    <th>
                        First_Name
                    </th>
                    <th>
                        Last_Name
                    </th>
                </tr>
            </thead>
            {users.map((user) => <UserItem user={user} />)}
        </table>
    )
}
export default UserList