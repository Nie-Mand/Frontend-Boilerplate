import { useMessages } from 'app/hooks'
import messages from './messages.json'
import { Title, Container } from './PickleRick.styled'

const PickleRick = () => {
  const t = useMessages('PickleRick')
  return (
    <Container>
      <Title>{t(messages.hello)}</Title>
    </Container>
  )
}

// type Props = {}

export default PickleRick
