
beforeEach(() => {
    cy.visit('http://localhost:3000/')
})

it('should find a update button', () => {
    cy.get(':nth-child(1) > :nth-child(4) > div > .MuiButtonBase-root > .MuiButton-label').click()
} )

it('type in the update popup', () => {
    cy.get(':nth-child(1) > :nth-child(4) > div > .MuiButtonBase-root > .MuiButton-label').click().get('#name').type('Working')
} )

// it('should update the text area of the section summary', () => {
//     cy.get(':nth-child(1) > :nth-child(4) > div > .MuiButtonBase-root > .MuiButton-label').click().get('#name').type('Working').get('.MuiButton-label').contains('Update').click()
// })