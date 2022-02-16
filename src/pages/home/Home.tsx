import { useMessages, useExample } from 'app/hooks'
import messages from './messages.json'
import { Button } from 'app/ui'
import styled from '@emotion/styled'

const Title = styled.h1`
  color: red;
`

const HomePage = () => {
  const t = useMessages('home')
  const { createUser } = useExample()
  return (
    <div>
      <Button>hello</Button>
      <button
        onClick={() =>
          createUser({
            name: 'test',
            age: 6,
          })
        }
      >
        heloo
      </button>
      <Title>{t(messages.welcome)}</Title>
    </div>
  )
}

// type Props = {}

export default HomePage
