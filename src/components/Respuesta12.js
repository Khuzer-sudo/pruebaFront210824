"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';

//Bootstrap
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


const Respuesta12 = () => {

    // Estado para almacenar la respuesta de la API
    const [responseData, setResponseData] = useState(null);
    const [error, setError] = useState(null);  // Estado para manejar errores
    const [postData, setPostData] = useState({ name: '', data: '' }); // Estado para los datos del formulario
    const [postResponse, setPostResponse] = useState(null); // Estado para la respuesta del POST
    const [postResponseError, setPostResponseError] = useState(null);  // Estado para manejar ejemplo de errores

    // Interceptors para manejar errores globalmente y añadir headers
    useEffect(() => {
        // Interceptor para añadir headers a cada petición
        const requestInterceptor = axios.interceptors.request.use(
            config => {
                const token = 'mi-token-de-autorizacion-27318382387'; // Ejemplo de header
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }
                return config;
            },
            error => {
                return Promise.reject(error);
            }
        );

        // Interceptor para manejar errores globalmente
        const responseInterceptor = axios.interceptors.response.use(
            response => response,
            error => {
                if (error.response) {
                    if (error.response.status === 401) {
                        setError('No autorizado.');
                    } else if (error.response.status === 500) {
                        setError('Error interno del servidor. Inténtelo más tarde.');
                    } else {
                        setError(`Error: ${error.response.status}`);
                    }
                } else {
                    setError('Error en la red o la solicitud fue cancelada.');
                }
                return Promise.reject(error);
            }
        );

        // Cleanup: Elimina los interceptors cuando el componente se desmonte
        return () => {
            axios.interceptors.request.eject(requestInterceptor);
            axios.interceptors.response.eject(responseInterceptor);
        };
    }, []);

    // Función que se ejecuta al presionar el botón 
    const handleAxiosRequest = async () => {
        try {
            const response = await axios.get('https://httpbin.org/get'); // URL API
            setResponseData(response.data);
            setError(null);  // Limpiar el error si la consulta es exitosa
        } catch (err) {
            setError('Error al realizar la consulta');
        }
    };

    // Función que se ejecuta al presionar el botón de POST
    const handlePostRequest = async () => {
        try {
            const response = await axios.post('https://api.restful-api.dev/objects', postData); // URL API
            setPostResponse(response.data);
            setError(null);  // Limpiar el error si la consulta es exitosa
        } catch (err) {
            setError('Error al realizar el POST');
        }
    };

    const handlePostRequestError = async () => {
        try {
            // Intenta hacer una solicitud POST con parámetros incorrectos
            const response = await axios.post('https://aa139874gt193e7rg', { incorrectParam: 'value' });
            setPostResponseError(response.data);
            setError(null);  // Limpiar el error si la consulta es exitosa
        } catch (err) {
            // Manejo de errores
            if (err.response) {
                setError(`Error: ${err.response.status} - ${err.response.data.message || 'No se pudo realizar la solicitud.'}`);
            } else if (err.request) {
                setError('Error en la solicitud. No se recibió respuesta.');
            } else {
                setError(`Error: ${err.message}`);
            }
        }
    };

    // Manejar cambios en los inputs del formulario
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPostData({
            ...postData,
            [name]: value
        });
    };

    return (
        <Container>
            <Row className="bordet">
                <Col>
                    <h4>1.	¿Puedes mostrar un ejemplo de cómo harías una solicitud GET y POST con Axios?</h4>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col>
                    <h5>Peticion GET Axios</h5>
                </Col>
                <Col>
                    <Button onClick={handleAxiosRequest}>Consulta GET</Button>
                </Col>
            </Row>

            <Row className="mt-5">
                <Col>
                    <span>Aqui va el texto de la consulta</span>
                    {error && <p>{error}</p>}
                </Col>
                <Col>
                    <span>
                        Aqui JSON en texto:
                        {responseData && <pre>{JSON.stringify(responseData, null, 2)}</pre>}
                    </span>
                </Col>
            </Row>

            <Row className="mt-5">
                <Col>
                    <h5>Peticion POST Axios</h5>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Form>
                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={postData.name}
                                onChange={handleInputChange}
                                placeholder="Introduce el nombre"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formData">
                            <Form.Label>Datos</Form.Label>
                            <Form.Control
                                type="text"
                                name="data"
                                value={postData.data}
                                onChange={handleInputChange}
                                placeholder="Introduce los datos (año, precio, modelo)"
                            />
                        </Form.Group>

                        <Button variant="primary" onClick={handlePostRequest}>
                            Enviar
                        </Button>
                    </Form>
                </Col>
                <Col>
                    <h3>Respuesta del POST</h3>
                    {postResponse && <pre>{JSON.stringify(postResponse, null, 2)}</pre>}
                </Col>
            </Row>
            <Row className="mt-5">
                <Col>
                    <h4>2.	¿Puedes dar un ejemplo de cómo has utilizado interceptors para manejar errores globalmente o añadir headers a cada petición?</h4>
                    <div className="mt-3">
                        <h6>Los headers de la consulta anterior envia siempre el header:</h6>
                        <h5> <b>Authorization</b></h5>
                        <h6>Con el valor: <b>mi-token-de-autorizacion-27318382387</b></h6>
                    </div>
                </Col>
            </Row>
            <Row>
            <Col>
                <h4>Para manejar los errores, el siguiente botón envía de forma incorrecta los parámetros y el URL y muestra un mensaje de error</h4>
                <div>
                    <Button variant="danger" onClick={handlePostRequestError}>
                        Recibir error
                    </Button>
                </div>
                <div>
                    {error && <p className="text-danger">{error}</p>}
                    {postResponseError && <pre>{JSON.stringify(postResponseError, null, 2)}</pre>}
                </div>
            </Col>
        </Row>
        </Container>
    );
};

export default Respuesta12;