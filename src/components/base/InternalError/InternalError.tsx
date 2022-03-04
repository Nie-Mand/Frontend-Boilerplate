import { useMessages } from 'app/hooks'
import messages from './messages.json'
import { Title, Container } from './InternalError.styled'

const InternalError = () => {
  const t = useMessages('InternalError')
  return (
    <Container>
      <Title>{t(messages.content)}</Title>
    </Container>
  )
}

// type Props = {}

export default InternalError
