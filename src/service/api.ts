import axios from 'axios'
import { API_URL } from '../constants/global'
import { ROUTES } from '../constants/routes'
import { setAccessToken } from '../utils/token'

interface TokenPayload {
    accessToken: string
    refreshToken: string
}

export const api = axios.create({
    baseURL: API_URL
})

//todas request passam por esse cara
api.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem('books-accesToken')

    if (config?.headers && accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config
})

export const setToken = ({ accessToken, refreshToken }: TokenPayload) => {
    setAccessToken(accessToken)
}

api.interceptors.response.use(
    (response) => response,

    //fluxo de erro
    async (error) => {
        const originalRequest = error.config
        const isLogin =
            error.response.data.errors.message === 'Usuário ou senha inválida.'

        if (error.response.status === 401 && !originalRequest._retry && !isLogin) {
            originalRequest._retry = true

            const refreshToken = localStorage.getItem('g4-refreshToken')
            const { headers } = await api.post(ROUTES.REFRESH_TOKEN.POST, {
                refreshToken
            })
            if (headers) {
                setAccessToken(headers.authorization)
                originalRequest.headers.Authorization = `Bearer ${headers.authorization}`
            }

            return axios(originalRequest)
        }
        return Promise.reject(error)
    }
)