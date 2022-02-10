import { mount } from '@cypress/react'
import Home from './Home'

it('renders learn react link', () => {
  mount(<Home />)
  cy.get('[cypress-id="cy-input"]').type('Hello')
  cy.get('[cypress-id="cy-button"]').click()
  cy.get('[cypress-id="cy-h1"]').should('have.value', 'Hello')
})
