import React from 'react';
import { Button } from 'react-bootstrap';

const UserItem = ({ user, onEdit, onDelete }) => (
    <div>
        <p>ID: {user.id}</p>
        <p>Nombre: {user.name}</p>
        <p>Email: {user.email}</p>
        <Button variant="warning" onClick={() => onEdit(user)}>Editar</Button>
        <Button variant="danger" onClick={() => onDelete(user.id)}>Eliminar</Button>
        <hr />
    </div>
);

export default UserItem;
