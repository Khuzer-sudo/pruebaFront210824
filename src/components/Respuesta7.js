import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Respuesta7 = () => {


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
                                <strong>3. Guardar los datos en `localStorage`</strong>
                                <ul>
                                    <li>Dentro de la función `handleChange`, después de actualizar el estado, utilizaria `localStorage.setItem` para almacenar los datos en `localStorage`.</li>
                                    <li>Despues, conviertiria los datos del formulario a una cadena JSON antes de guardarlos en `localStorage` y sea mas facil guardar los datos.</li>
                                </ul>
                            </li>
                            <li>
                                <strong>4. Recuperar los datos de `localStorage`</strong>
                                <ul>
                                    <li>Cuando el componente se monta, utiliza `localStorage.getItem` para recuperar los datos guardados anteriormente.</li>
                                    <li>Si existen datos guardados, actualiza el estado del componente para mostrarlos en el formulario.</li>
                                </ul>
                            </li>
                            <li>
                                <strong>5. Renderizar los datos guardados</strong>
                                <ul>
                                    <li>Agregaria un botón y una función que permita al usuario ver los datos guardados en `localStorage`.</li>
                                    <li>Utilizaria un mapa para iterar sobre los datos guardados y mostrarlos</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Respuesta7;
