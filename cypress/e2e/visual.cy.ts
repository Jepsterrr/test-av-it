describe('Visuell Regression', () => {
  it('startsida diff', () => {
    cy.visit('/')

    const hostElementSelector = 'nextjs-portal'; // Värdelementet för Shadow DOM
    const nextJsToastSelectorInShadow = '[data-nextjs-toast="true"]'; // Vår målselektor inuti Shadow DOM

    // Stilar för att dölja toast-meddelandet
    const stylesToHide = `
      ${nextJsToastSelectorInShadow} {
      display: none !important;
      visibility: hidden !important;
      opacity: 0 !important;
      position: absolute !important;
      width: 0 !important;
      height: 0 !important;
      overflow: hidden !important;
      top: -9999px !important;
      left: -9999px !important;
      }
    `;

    // Hitta värdelementet, gå in i dess Shadow DOM, och injicera stilar där
    cy.get(hostElementSelector, { timeout: 10000 }) // Ge det tid att dyka upp
      .shadow() // Gå in i Shadow DOM
      .then(($shadowRoot) => {
        // Skapa en <style>-tagg
        const styleEl = document.createElement('style');
        styleEl.innerHTML = stylesToHide;
        // Lägg till <style>-taggen i Shadow DOM:s rot
        $shadowRoot[0].appendChild(styleEl); // $shadowRoot är ett jQuery-objekt, vi behöver DOM-elementet
      });

    cy.wait(500); // Vänta en stund för att säkerställa att stilarna har applicerats

    cy.compareSnapshot('homepage') // Jämför med baslinjebilden
  })
})