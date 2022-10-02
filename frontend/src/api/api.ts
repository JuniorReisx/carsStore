import axios from "axios"
import {getToken} from "./auth"

//axios.post(url, body, method, header)

export const api = axios.create({ baseURL: "http://localhost:8000" })

const header = {
    "Content-Type": "application/json",
    Authorization: "",
}
const parameters = {
    method: "GET",
    headers: header

}

api.interceptors.request.use((config) => {
    const user = getToken()
    if (!user) {
        return config
    }
    if (config.headers) {
        config.headers.Authorization = `Bearer ${user.token}`
        return config
    }
}, (error) => {
    return Promise.reject(error)

})