import { useMessages, useExample } from 'app/hooks'
import messages from './messages.json'
import { Button } from 'app/ui'
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
      <h1>{t(messages.welcome)}</h1>
    </div>
  )
}

// type Props = {}

export default HomePage
