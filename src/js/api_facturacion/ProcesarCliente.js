import axios from "axios";
/////metodos fachada
export const obtenerPorCedulaFachada = async (cedula) => {
    return await obtenerPorCedula(cedula)
}

export const insertarFachada = async (body) => {
    await insertar(body)
}

export const actualizarFachada = async (id, body) => {
    await actualizar(id, body)
}

export const buscarTodosFachada = () => {
    return buscarTodos()
}

export const borrarPorIDFachada = (id) => {
    borrarPorID(id)
}

export const borrarPorCedulaFachada = async (cedula) => {
    await borrarPorCedula(cedula)
}


//Metodos de consumo CRUD
const obtenerPorCedula = async (cedula) => {
    const data = axios.get(`http://localhost:8081/API/Facturacion/V1/clientes/porCedula/${cedula}`).then(r => r.data)
    return data
}

const insertar = async (body) => {
    axios.post(`http://localhost:8081/API/Facturacion/V1/clientes`, body).then(r => r.data)
}

const actualizar = async (id, body) => {
    axios.put(`http://localhost:8081/API/Facturacion/V1/clientes/${id}`, body).then(r => r.data)
}

const buscarTodos = () => {

}

const borrarPorID = (id) => {
    axios.delete(`http://localhost:8081/API/Facturacion/V1/clientes/${id}`).then(r => r.data)
}

const borrarPorCedula = (cedula) => {
    axios.delete(`http://localhost:8081/API/Facturacion/V1/clientes/porCedula/${cedula}`).then(r => r.data)
}

//export default obtenerPorCedulaFachada

