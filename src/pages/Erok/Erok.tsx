import { useMessages } from 'app/hooks'
import messages from './messages.json'
import { Title, Container } from './Erok.styled'

const Erok = () => {
  const t = useMessages('Erok')
  return (
    <Container>
      <Title>{t(messages.hello)}</Title>
    </Container>
  )
}

// type Props = {}

export default Erok
