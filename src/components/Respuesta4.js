import React, { useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';

const Respuesta4 = () => {
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    // Simula una operación asíncrona con una promesa
    const handlePromise = () => {
        const simulateAsyncOperation = new Promise((resolve, reject) => {
            setTimeout(() => {
                const success = Math.random() > 0.5; // 50% de probabilidad de éxito

                if (success) {
                    resolve('Operación exitosa!'); // Resuelve la promesa con éxito
                } else {
                    reject('Error en la operación.'); // Rechaza la promesa con error
                }
            }, 100);
        });

        simulateAsyncOperation
            .then(result => {
                setMessage(result); // Muestra el mensaje de éxito
                setError(''); // Limpia el mensaje de error
            })
            .catch(err => {
                setMessage(''); 
                setError(err);
            });
    };

    return (
        <Container>
            <Row>
                <Col>
                    <h4>4.	¿Qué son las promesas y cómo las usas?</h4>
                    <h5>Ejemplo de Promesas en JavaScript</h5>
                    <p>
                        Las promesas son una forma de manejar operaciones asíncronas en JavaScript.
                        Una promesa puede estar en uno de tres estados: pendiente, cumplida o rechazada.
                    </p>
                    <ul>
                        <li>Pendiente: La promesa aún no se ha completado ni ha fallado. Está en espera de que se resuelva.</li>
                        <li>Cumplida: La promesa se ha completado con éxito y el valor está disponible.</li>
                        <li>Rechazada: La promesa ha fallado y se ha producido un error.</li>
                    </ul>
                    <p> El siguiente boton tiene un 50% de probabilidad de regresar una promesa exitosa o fallada</p>
                    <Button variant="primary" onClick={handlePromise}>
                        Ejecutar Promesa
                    </Button>
                    <div className="mt-3">
                        {message && <p className="text-success">{message}</p>}
                        {error && <p className="text-danger">{error}</p>}
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Respuesta4;