import React, { useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';

const Respuesta6 = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    // Función para realizar la solicitud AJAX utilizando fetch
    const fetchData = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
            if (!response.ok) {
                throw new Error('Error en la solicitud: ' + response.statusText);
            }
            const result = await response.json();
            setData(result);
            setError(null);
        } catch (err) {
            setError(err.message);
            setData(null);
        }
    };

    return (
        <Container>
            <Row>
                <Col>
                    <h2>Ejemplo de Solicitud AJAX con Fetch</h2>
                    <p>
                        Aquí se muestra cómo hacer una solicitud AJAX utilizando el método <code>fetch</code> en JavaScript.
                    </p>
                    <Button onClick={fetchData}>Realizar Solicitud</Button>
                    <div className="mt-3">
                        {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
                        {error && <p className="text-danger">{error}</p>}
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Respuesta6;
