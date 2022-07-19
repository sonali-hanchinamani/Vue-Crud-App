describe('check root link', () => {
  it('passes', () => {
    cy.visit('http://localhost:8080/')
  })
})


describe('Input data', () => {
  it('check addition of new data', () => {
    const uuid = () => Cypress._.random(0, 1e6)
    const id = uuid()
    const testName = `testname${id}`
    const testEmail = `${testName}@natif.ai`

    cy.visit('http://localhost:8080/add')

    cy.get('#name').type(testName)
    cy.get('#email').type(testEmail)
    cy.get("#status").select("active")
    cy.get("#gender").select("male")
    cy.get('#submit').click()

    cy.visit('http://localhost:8080')
    cy.get('li.list-group-item').contains(testEmail)
    cy.get('li.list-group-item').contains(testName)
  })
})