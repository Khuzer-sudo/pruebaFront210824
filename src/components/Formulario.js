import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import UserForm from './UserForm';
import UserList from './UserList';

const Formulario = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        const storedUsers = localStorage.getItem('usersData');
        if (storedUsers) {
            setUsers(JSON.parse(storedUsers));
        } else {
            fetchUsers();
        }
    }, []);

    const saveUser = (user) => {
        if (user.id) {
            const updatedUsers = users.map(u => u.id === user.id ? user : u);
            setUsers(updatedUsers);
            localStorage.setItem('usersData', JSON.stringify(updatedUsers));
        } else {
            const newUser = { ...user, id: Date.now().toString() };
            const updatedUsers = [...users, newUser];
            setUsers(updatedUsers);
            localStorage.setItem('usersData', JSON.stringify(updatedUsers));
        }
    };

    const editUser = (user) => {
        setSelectedUser(user);
    };

    const deleteUser = (id) => {
        const updatedUsers = users.filter(user => user.id !== id);
        setUsers(updatedUsers);
        localStorage.setItem('usersData', JSON.stringify(updatedUsers));
    };

    return (
        <Container>
            <Row>
                <Col>
                    <h2>Gestión de Usuarios</h2>
                    <UserForm onSave={saveUser} selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
                    <UserList users={users} onEdit={editUser} onDelete={deleteUser} />
                </Col>
            </Row>
        </Container>
    );
};

export default Formulario;
