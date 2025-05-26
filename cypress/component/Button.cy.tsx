import Button from "@/app/components/Button"
import { mount } from 'cypress/react'

describe('<Button />', () => {
  it('rendar korrekt och svarar på klick', () => {
    const onClick = cy.stub().as('onClick')
    mount(<Button onClick={onClick}>Click me</Button>)
    cy.get('[data-cy="generic-button"]').click().then(() => {
      expect(onClick).to.have.been.calledOnce
    })
  })
})