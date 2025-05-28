import Button from "@/app/components/Button"
import { mount } from 'cypress/react'

describe('<Button />', () => {
  it('rendar korrekt och svarar på klick', () => {
    const onClick = cy.stub().as('onClick')
    mount(<Button onClick={onClick}>Click me</Button>) // Montera komponenten med Cypress React
    cy.get('[data-cy="generic-button"]').click().then(() => { // Hitta knappen och klicka på den
      expect(onClick).to.have.been.calledOnce // Verifiera att onClick-funktionen anropades
    })
  })
})