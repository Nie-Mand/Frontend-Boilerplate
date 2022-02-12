import { useIntl } from 'react-intl'
import messages from './messages'
import { Button, Input } from 'app/ui'
import { useState } from 'react'
import { useExample } from 'app/redux/hooks'

const HomePage = () => {
  const { createUser, state } = useExample()

  console.log(state)

  const intl = useIntl()
  const [name, setName] = useState('')
  const [display] = useState('')

  return (
    <div>
      <h1>{intl.formatMessage(messages['home.welcome'])}</h1>
      <h1 cypress-id="cy-h1">{display}</h1>
      <Input
        value={name}
        onChange={e => setName(e.target.value)}
        cypress-id="cy-input"
      />
      <Button onClick={createUser} cypress-id="cy-button">
        Hello world
      </Button>
    </div>
  )
}

// type Props = {}

export default HomePage
