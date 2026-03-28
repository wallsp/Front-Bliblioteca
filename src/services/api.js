import axios from "axios"
import { toast } from "react-toastify"

const api = axios.create({
    baseURL: "http://localhost:3333"
})

api.interceptors.response.use(
    (response) => {return response},
    (error) =>{
        console.log(error)
        if(error.response.status >= 400 && error.response.status <=  500 ){
        toast.warn( error.response.data, {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        }


        return Promise.reject()
    }
)

export default api