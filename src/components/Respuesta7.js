import React, { useState, useEffect } from 'react';
import { Form, Container, Row, Col, Button } from 'react-bootstrap';

const Respuesta7 = () => {
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        email: ''
    });
    const [storedData, setStoredData] = useState([]);
    const [editMode, setEditMode] = useState(false);

    // Cargar los datos desde localStorage cuando el componente se monta
    useEffect(() => {
        const stored = localStorage.getItem('usersData');
        if (stored) {
            setStoredData(JSON.parse(stored));
        }
    }, []);

    // Generar un ID único basado en el timestamp y la longitud de los usuarios guardados
    const generateId = () => {
        return Date.now().toString() + storedData.length;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (editMode) {
            // Modo de edición: Actualizar usuario existente
            const updatedData = storedData.map(user =>
                user.id === formData.id ? formData : user
            );
            setStoredData(updatedData);
            localStorage.setItem('usersData', JSON.stringify(updatedData));
        } else {
            // Modo de creación: Agregar un nuevo usuario
            const newUser = { ...formData, id: generateId() };
            const updatedData = [...storedData, newUser];
            setStoredData(updatedData);
            localStorage.setItem('usersData', JSON.stringify(updatedData));
        }

        // Limpiar el formulario y salir del modo de edición
        setFormData({ id: '', name: '', email: '' });
        setEditMode(false);
    };

    const handleEdit = (id) => {
        const userToEdit = storedData.find(user => user.id === id);
        setFormData(userToEdit);
        setEditMode(true);
    };

    const handleDelete = (id) => {
        const updatedData = storedData.filter(user => user.id !== id);
        setStoredData(updatedData);
        localStorage.setItem('usersData', JSON.stringify(updatedData));
    };

    const handleShowStoredData = () => {
        const stored = localStorage.getItem('usersData');
        if (stored) {
            setStoredData(JSON.parse(stored));
        }
    };

    return (
        <Container>
            <Row>
                <Col>
                    <h4>7.	Imagina que necesitas crear un formulario en React que almacene sus datos en localStorage cada vez que el usuario escribe. ¿Cómo lo harías?</h4>
                    <div>
                        <ul>
                            <li>
                                <strong>1. Crear el formulario en React</strong>
                                <ul>
                                    <li>Definiria un componente de React que incluya un formulario con los campos necesarios (En este ejemplo usaré nombre y correo electrónico).</li>
                                    <li>Utilizar el estado (`useState`) para manejar los valores de los campos del formulario.</li>
                                </ul>
                            </li>
                            <li>
                                <strong>2. Manejar los cambios en el formulario</strong>
                                <ul>
                                    <li>Agregaria una función `handleChange` que se ejecute cada vez que el usuario escribe en un campo del formulario.</li>
                                    <li>Con esto, el estado con el valor ingresado por el usuario se actualizaria con cada cambio.</li>
                                    <li>Tambien agregaria una función `handleSubmit` para que se ejecute con un boton, esto da al usuario la seguridad de que los cambios fueron guardados</li>
                                </ul>
                            </li>
                            <li>
                                <strong>Guardar los datos en `localStorage`</strong>
                                <ul>
                                    <li>Dentro de la función `handleChange`, después de actualizar el estado, utilizaria `localStorage.setItem` para almacenar los datos en `localStorage`.</li>
                                    <li>Despues, conviertiria los datos del formulario a una cadena JSON antes de guardarlos en `localStorage` y sea mas facil guardar los datos.</li>
                                </ul>
                            </li>
                            <li>
                                <strong>Recuperar los datos de `localStorage`</strong>
                                <ul>
                                    <li>Cuando el componente se monta, utiliza `localStorage.getItem` para recuperar los datos guardados anteriormente.</li>
                                    <li>Si existen datos guardados, actualiza el estado del componente para mostrarlos en el formulario.</li>
                                </ul>
                            </li>
                            <li>
                                <strong>Renderizar los datos guardados</strong>
                                <ul>
                                    <li>Agregaria un botón y una función que permita al usuario ver los datos guardados en `localStorage`.</li>
                                    <li>Utilizaria un mapa para iterar sobre los datos guardados y mostrarlos</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <h2>Formulario con almacenamiento en LocalStorage</h2>
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
                            {editMode ? 'Actualizar Usuario' : 'Guardar Usuario'}
                        </Button>
                    </Form>

                    <Button className="mt-3" onClick={handleShowStoredData}>
                        Mostrar Usuarios Guardados
                    </Button>

                    {storedData.length > 0 && (
                        <div className="mt-3">
                            <h4>Usuarios Guardados en LocalStorage:</h4>
                            {storedData.map(user => (
                                <div key={user.id}>
                                    <p>ID: {user.id}</p>
                                    <p>Nombre: {user.name}</p>
                                    <p>Email: {user.email}</p>
                                    <Button variant="warning" onClick={() => handleEdit(user.id)}>Editar</Button>
                                    <Button variant="danger" onClick={() => handleDelete(user.id)}>Eliminar</Button>
                                    <hr />
                                </div>
                            ))}
                        </div>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default Respuesta7;
