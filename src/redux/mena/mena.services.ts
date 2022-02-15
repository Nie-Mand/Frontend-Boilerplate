import axios from 'app/api'

export const createMena = (body: { message: string }) => axios.post('/', body)
