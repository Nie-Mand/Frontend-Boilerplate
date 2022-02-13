import axios from 'app/api'

export const createBruv = (body: { message: string }) => axios.post('/', body)
