
beforeEach(() => {
    cy.visit('http://localhost:3000/')
})

describe("Status Update", () => {
    it('should contain a red color in the section summary', () => {
    cy
        .get('#status-color')
        .should('have.css', 'background-color')
        .and('eq', 'rgb(255, 0, 0)' || 'red')
    })

    it('should be able to change colors when another color is chosen', () => {
    cy
        .get('#status-color')
        .should('have.css', 'background-color')
        .and('eq', 'rgb(255, 0, 0)')

        return cy
        .get('.MuiButton-label')
        .contains('Change')
        .click()
        .get('#change-green')
        .click()
          .then(() => {
            cy
              .get('#status-color')
              .should('have.css', 'background-color')
              .and('eq', 'rgb(0, 128, 0)')
          })
    })

    it('should change the color of the task status', () => {
      cy
        .get('#task-status-icon')
        .should('have.css', 'color')
        .and('eq', 'rgb(255, 0, 0)')

        return cy
        .get('#task-card-task')
        .click()
        .get('#abnormal')
        .click()
          .then(() => {
            cy
              .get('#task-status-icon')
              .should('have.css', 'color')
              .and('eq', 'rgb(255, 255, 0)')
          })
        



    })
})

describe("Comment update", () => {
    it('should find a update button', () => {
        cy
          .get(':nth-child(1) > :nth-child(4) > div > .MuiButtonBase-root > .MuiButton-label')
          .click()
    } )

    it('type in the update popup', () => {
        cy
        .get(':nth-child(1) > :nth-child(4) > div > .MuiButtonBase-root > .MuiButton-label')
        .click()
        cy.get('#name')
        .type('Lorem ipsum dolor sit amet')
    } )

    it('should update the text area of the section summary', () => {
        cy.get(':nth-child(1) > :nth-child(4) > div > .MuiButtonBase-root > .MuiButton-label')
          .click()
        cy.get('#name')
          .type('Lorem ipsum dolor sit amet')
        cy.get('#popup-update-button')
          .click()
        cy.get('body')
          .contains('Lorem ipsum dolor sit amet')
    })
})

