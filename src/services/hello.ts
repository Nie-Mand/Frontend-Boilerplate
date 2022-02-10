import axios from './client'

// export const helloWorld = () => axios.post('/')
export const helloWorld = () => new Promise(() => 'hello world')
