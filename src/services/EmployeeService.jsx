
import axios from "axios"
import ApiAxios from "../config/ApiAxios"


const getEmployees = async () =>{

    const response = await  ApiAxios.get('/employees')
    return response.data    
}

export const getEmployeesSearch = async(value) =>{
    const response = await ApiAxios.get('/employees',{
        params: {value}
    })
return response.data
}
export const getEmployeeById = async (id) =>{
    console.log("ID:", id); // adicionando um console.log para verificar o ID
    const response = await axios.get(`http://127.0.0.1:8080/employees/${id}`)
    return response.data
}


export const postEmployee = async ({name, position}) =>{
await ApiAxios.post('/employees', {name,position})
}


export const deleteEmployeeById = async (id)=>{
    return await ApiAxios.delete(`/employees/${id}`)
}

export default getEmployees