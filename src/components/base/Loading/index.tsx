import { useMessages } from 'app/hooks'
import messages from './messages.json'
import { Title, Container } from './Loading.styled'

const Loading = () => {
  const t = useMessages('Loading')
  return (
    <Container>
      <Title>{t(messages.loading)}</Title>
    </Container>
  )
}

// type Props = {}

export default Loading
