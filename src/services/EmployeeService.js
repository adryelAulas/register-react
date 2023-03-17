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

export default getEmployees