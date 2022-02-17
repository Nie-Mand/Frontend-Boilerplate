import { useMessages } from 'app/hooks'
import messages from './messages.json'
import { Title } from './Home.styled'

const Home = () => {
  const t = useMessages('home')
  return (
    <div>
      <Title>{t(messages.hello)}</Title>
    </div>
  )
}

// type Props = {}

export default Home
