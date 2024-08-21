import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Respuesta9 = () => {

    return (
        <Container>
            <Row>
                <Col>
                    <h2>Manejo de Estado Complejo en React</h2>
                    <p>
                        Cuando trabajamos con un estado complejo, como un formulario con múltiples campos o preferencias, 
                        <strong> `useReducer`</strong> es una opción más adecuada que `useState`. 
                        Esto se debe a que `useReducer` proporciona un manejo más estructurado de las actualizaciones del estado.
                    </p>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col>
                    <h3>Explicación</h3>
                    <ul>
                        <li>
                            <strong>useState</strong>: Ideal para estados simples, como un valor booleano o un número.
                        </li>
                        <li>
                            <strong>useReducer</strong>: Más adecuado para estados complejos que involucran múltiples valores interrelacionados, 
                            ya que permite gestionar la lógica de actualización del estado de una manera más clara y mantenible.
                        </li>
                        <li>
                            <strong>Reducer y Dispatch</strong>: `useReducer` funciona con una función `reducer` que recibe el estado actual y una acción. 
                            La función `dispatch` se utiliza para enviar acciones que desencadenan la lógica de actualización del estado.
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}
export default Respuesta9;
