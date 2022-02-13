import { useSwitchLanguage, useMessages } from 'app/hooks'
import messages from './messages.json'

const HomePage = () => {
  const t = useMessages('home')

  const handleSwitchLanguage = useSwitchLanguage()

  return (
    <div>
      <h1>{t(messages.welcome)}</h1>

      <button onClick={handleSwitchLanguage}>change language</button>
    </div>
  )
}

// type Props = {}

export default HomePage
