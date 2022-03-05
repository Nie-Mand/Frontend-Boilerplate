import { useMessages } from 'app/hooks'
import messages from './messages.json'
import { Title, Container } from './Blog.styled'

const Blog = () => {
  const t = useMessages('Blog')
  return (
    <Container>
      <Title>{t(messages.hello)}</Title>
    </Container>
  )
}

// type Props = {}

export default Blog
