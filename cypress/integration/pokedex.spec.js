describe('Testing my Pokedex', () => {

  beforeEach(() => {
    cy.visit('https://dreamz89.github.io/pokedex/')
  })

  it('gets pokemon data from the API', () => {
    cy.request('https://pokeapi.co/api/v2/pokemon/?limit=40')
      .then(response => {
        expect(response.body.results).to.have.length(40)
      })

    cy.request('https://pokeapi.co/api/v2/evolution-chain/?limit=16')
    .then(response => {
      expect(response.body.results).to.have.length(16)
    })
  })

  it('should find an existing pokemon', () => {
    cy.get('input').type('pikachu')
    cy.get('button').click()
    cy.get('h5').contains('pikachu')
  })

  it('should not find a non-existing pokemon', () => {
    cy.get('input').type('igglybuff')
    cy.get('button').click()
    cy.contains('igglybuff').should('not.exist')
  })

  it('should show all pokemon if search field is empty', () => {
    cy.get('input').type('pikachu')
    cy.get('button').click()
  
    cy.get('input').clear()
    cy.get('button').click()

    cy.get('h5')
      .should($h5 => {
        let texts = $h5.map((i, el) => {
          return Cypress.$(el).text()
        })

        texts = texts.get()
        expect(texts).to.have.length(40)
      })
  })

it('should show clicked pokemon details', () => {
    cy.get('h5').contains('pikachu').click()
    cy.contains('hp')
  })

it('should show type icons', () => {
    cy.get('h5').contains('pikachu').click()
    cy.get('[alt="electric"]')
      .should('be.visible')
      .and($img => {
        expect($img[0].naturalWidth).to.be.greaterThan(0)
      })
  })

  // excludes pichu because it is #174 and pokemon list is limited to 40
  it('should change to evolved pokemon details', () => {
    cy.get('h5').contains('pikachu').click()
    
    cy.get('.modal-dialog').within($modal => {
      cy.get('p').contains('raichu').click()
      cy.get('h5').contains('raichu')
    })
  })
})