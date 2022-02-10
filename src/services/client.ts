import axios from 'axios'

const client = axios.create({
  baseURL: 'http://localhost:4000',
  headers: {
    authorization: `Bearer ${localStorage.getItem('token')}}`,
  },
})

export default client
