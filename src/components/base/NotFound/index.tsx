import { useMessages } from 'app/hooks'
import messages from './messages.json'
import { Title, Container } from './NotFound.styled'

const NotFound = () => {
  const t = useMessages('NotFound')
  return (
    <Container>
      <Title>{t(messages.notfound)}</Title>
    </Container>
  )
}

// type Props = {}

export default NotFound
