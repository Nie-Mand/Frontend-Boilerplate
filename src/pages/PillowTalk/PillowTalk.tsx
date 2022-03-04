import { useMessages } from 'app/hooks'
import messages from './messages.json'
import { Title, Container } from './PillowTalk.styled'

const PillowTalk = () => {
  const t = useMessages('PillowTalk')
  return (
    <Container>
      <Title>{t(messages.hello)}</Title>
    </Container>
  )
}

// type Props = {}

export default PillowTalk
