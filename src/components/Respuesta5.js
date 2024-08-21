import React, { useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';

const Respuesta5 = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    // Ejemplo con async/await y manejo de errores
    const fetchData = async () => {
        try {
            // Intencionadamente usamos una URL incorrecta para provocar un error
            const response = await fetch('https://jsonplaceholder.typicode.com/incorrect-endpoint');
            if (!response.ok) {
                throw new Error('Error en la solicitud ' + response.statusText);
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
                    <h2>Diferencia entre async/await y Promesas</h2>
                    <ul>
                        <li>Las promesas permiten manejar operaciones asíncronas utilizando `.then()` y `.catch()`.</li>
                        <li>`async/await` es una sintaxis más moderna que permite escribir código asíncrono que parece síncrono, facilitando la lectura y el manejo de errores.</li>
                        <li>En este ejemplo, al presionar el boton, ejecuta una consulta erronea, por lo que mostrara un error intencionalmente.</li>
                    </ul>
                    <h3>Ejemplo de manejo de errores</h3>
                    <Button onClick={fetchData}>Obtener Datos</Button>
                    <div className="mt-3">
                        {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
                        {error && <p className="text-danger">{error}</p>}
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Respuesta5;
