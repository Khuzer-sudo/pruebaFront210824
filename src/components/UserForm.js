import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const UserForm = ({ onSave, selectedUser, setSelectedUser }) => {
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        email: ''
    });

    useEffect(() => {
        if (selectedUser) {
            setFormData(selectedUser);
        }
    }, [selectedUser]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
        setFormData({ id: '', name: '', email: '' });
        setSelectedUser(null);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Introduce tu nombre"
                />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mt-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Introduce tu email"
                />
            </Form.Group>

            <Button className="mt-3" type="submit">
                {formData.id ? 'Actualizar Usuario' : 'Guardar Usuario'}
            </Button>
        </Form>
    );
};

export default UserForm;
