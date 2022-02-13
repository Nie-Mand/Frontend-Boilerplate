import { useMessages } from 'app/hooks'
import messages from './messages.json'

const HomePage = () => {
  const t = useMessages('home')

  return (
    <div>
      <h1>{t(messages.welcome)}</h1>
    </div>
  )
}

// type Props = {}

export default HomePage
