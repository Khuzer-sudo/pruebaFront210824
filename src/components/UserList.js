import React from 'react';
import UserItem from './UserItem';

const UserList = ({ users, onEdit, onDelete }) => (
    <div>
        {users.length > 0 ? (
            users.map(user => (
                <UserItem key={user.id} user={user} onEdit={onEdit} onDelete={onDelete} />
            ))
        ) : (
            <p>No hay usuarios guardados.</p>
        )}
    </div>
);

export default UserList;
