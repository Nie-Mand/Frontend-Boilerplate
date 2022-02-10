import { mount } from '@cypress/react'
import Home from '../../src/pages/home'
import I18NProvider from '../../src/i18n'

// FIXME: This test is failing because of React INTL
// FIXME: Test Files should be placed in the correct folder

it('renders learn react link', () => {
  mount(
    <I18NProvider>
      <Home />
    </I18NProvider>,
  )
  cy.get('[cypress-id="cy-input"]').type('Hello')
  cy.get('[cypress-id="cy-button"]').click()
  cy.get('[cypress-id="cy-h1"]').should('have.value', 'Hello')
})
