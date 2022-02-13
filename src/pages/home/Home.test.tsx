import { mount } from '@cypress/react'
import Home from './Home'
import { Provider as ReduxProvider } from 'react-redux'
import store from 'app/redux/store'

// ! FIXME: why cypress is annoying 🤷‍♂️
it('renders Home Component', () => {
  mount(
    <ReduxProvider store={store}>
      <Home />)
    </ReduxProvider>,
  )

  cy.get('h1').should('contain', 'Hello World')
})
