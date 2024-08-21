import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, ListGroup} from 'react-bootstrap';

const Respuesta8 = () => {
    const [users, setUsers] = useState([]); // Estado para almacenar la lista de usuarios
    const [error, setError] = useState(null); // Estado para manejar errores

    // Función para obtener los usuarios de la API
    const fetchUsers = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            setUsers(response.data); // Almacenar la lista de usuarios en el estado
        } catch (err) {
            setError('Error al cargar los usuarios'); // Manejar el error
        }
    };

    // useEffect para ejecutar la solicitud cuando el componente se monta
    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <Container>
            <Row>
                <Col>
                <h4> 8.	Supongamos que tienes que consumir una API REST para mostrar una lista de usuarios en tu aplicación. ¿Cómo lo implementarías utilizando Axios?</h4>
                <Row className="mt-5">
                <Col>
                    <h3>Pasos para consumir una API REST con Axios</h3>
                    <ul>
                        <li>
                            <strong>1. Instalar Axios</strong> con el comando <strong> npm install axios</strong>. 
                        </li>
                        <li>
                            <strong>2. Configurar el estado</strong> Se deben definir los estados para manejar la lista de usuarios, el estado de carga y los errores.
                        </li>
                        <li>
                            <strong>3. Crear la función para la solicitud</strong> Usar una consulta `get` para realizar la solicitud a la API y almacenar la respuesta en el estado.
                        </li>
                        <li>
                            <strong>4. Utilizar `useEffect`</strong> Ejecutar la función de solicitud cuando el componente se monte, utilizando el hook `useEffect`.
                        </li>
                        <li>
                            <strong>5. Renderizar los datos</strong> Mostrar los datos en una lista (`ListGroup`) y manejar los estados de carga y error.
                        </li>
                    </ul>
                </Col>
            </Row>
                    <h4>Lista de Usuarios (Ejemplo de consulta a jsonplaceholder)</h4>
                    {error && <p className="text-danger">{error}</p>}
                    {!error && (
                        <ListGroup>
                            {users.map(user => (
                                <ListGroup.Item key={user.id}>
                                    <strong>{user.name}</strong> - {user.email}
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default Respuesta8;
