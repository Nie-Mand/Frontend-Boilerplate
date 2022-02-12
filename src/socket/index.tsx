import { io } from 'socket.io-client'
import { useEffect } from 'react'

const SocketProvider = ({ children }: Props) => {
  useEffect(() => {
    const socket = io(import.meta.env.VITE_SOCKET_URL, {})

    socket.on('connect', function () {
      console.log('connected as', socket.id)
    })

    socket.on('event', () => {
      console.log('event')
    })

    return () => {
      socket.close()
    }
  }, [])

  return <>{children}</>
}
type Props = {
  children: JSX.Element | JSX.Element[]
}

export default SocketProvider
