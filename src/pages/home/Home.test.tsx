import { mount } from '@cypress/react'
import Home from '.'
import Providers from 'app/Providers'

// ! FIXME: why cypress is annoying 🤷‍♂️
it('renders Home Component', () => {
  mount(<Home />)
})
