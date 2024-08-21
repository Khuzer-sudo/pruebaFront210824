import React, { useState } from 'react';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';

const Respuesta3 = () => {
    const [contador1 = 0] = useState(() => {
        // Crear el contador con la función de cierre
        const crearContador = () => {
            let contador = 0;
            return function () {
                contador += 1;
                return contador;
            };
        };

        // Inicializar el contador1
        return crearContador();
    });

    const [contador2 = 0] = useState(() => {
        // Crear un segundo contador con la función de cierre
        const crearContador = () => {
            let contador = 0;
            return function () {
                contador += 1;
                return contador;
            };
        };

        // Inicializar el contador2
        return crearContador();
    });

    const [resultado1 = 0, setResultado1] = useState(null);
    const [resultado2 = 0, setResultado2] = useState(null);

    const incrementarContador1 = () => {
        setResultado1(contador1());
    };

    const incrementarContador2 = () => {
        setResultado2(contador2());
    };

    return (
        <Container className="mt-4">
            <Row>
                <Col>
                    <h2>3.	¿Puedes explicar el concepto de "closure" en JavaScript con un ejemplo?</h2>
                    <h4>Explicación:</h4>
                    <ul>
                        <li>Se creo una función llamada: crearContador().</li>

                        <li>Esta instancia recuerda el valor de contador desde el momento en que se creó.</li>

                        <li>Cada vez que se presiona un botón (contador1 o contador2), incrementa y devuelve el valor de contador, </li>

                        <li>El valor se mantiene entre las llamadas gracias al closure. Ya que los closure permiten encapsular datos y mantener el estado interno seguro y privado.</li>
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div>
                        <h2>Contador 1</h2>
                        <Button onClick={incrementarContador1}>Contador(1) + 1</Button>
                        <h5>Valor del primer contador: </h5>
                        <Badge bg="primary">{resultado1}</Badge>
                    </div>
                </Col>
                <Col>
                    <div>
                        <h2>Contador 2</h2>
                        <Button variant="success" onClick={incrementarContador2}>Contador(2) + 1</Button>

                        <h5>Valor del segundo contador:</h5>
                        <Badge bg="success">{resultado2}</Badge>

                    </div>
                </Col>
            </Row>
        </Container>

    );
};

export default Respuesta3;
