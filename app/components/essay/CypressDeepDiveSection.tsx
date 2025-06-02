"use client";

export default function CypressDeepDiveSection() {
  return (
    <section id="cypressDeepDive" className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4 flex items-center">
          Fördjupning i Cypress Testverktyg
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Här dyker vi ner i Cypress kärna! Vi utforskar de centrala aspekterna som gör det till ett så kraftfullt verktyg för modern webbtestning, från dess smarta arkitektur till nyckelkommandon som maximerar din testpotential.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Kärnkoncept som Gör Cypress Unikt</h3>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <div> 
            <h4 className="font-semibold text-lg">Selektorer och Interaktioner</h4>
            <p>För robusta tester, välj element smart! Cypress rekommenderar <code>data-cy</code> (eller <code>data-test</code>/<code>data-testid</code>) attribut. De är stabilare än CSS-klasser och gör dina tester mindre känsliga för ändringar i UI:t.</p>
            <p className="mt-2">Exempel på vanliga interaktioner:</p>
            <ul className="list-disc list-inside ml-4 mt-1">
              <li><code>cy.get('[data-cy=submit-button]').click();</code> - Hittar och klickar på ett element.</li>
              <li><code>cy.get('[data-cy=input-username]').type('Test Name');</code> - Skriver text i ett fält.</li>
              <li><code>cy.get('[data-cy=username]').should('have.value', 'Test Name');</code> - Verifierar ett fälts värde.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg">Assertions: Verifiera Din Applikations Tillstånd</h4>
            <p>Att verifiera är kärnan! Cypress använder det läsbara Chai-biblioteket för assertions, oftast via kommandot <code>.should()</code>, för att kraftfullt bekräfta att din applikation beter sig korrekt.</p>
            <p className="mt-2">Exempel på verifieringar:</p>
            <ul className="list-disc list-inside ml-4 mt-1">
              <li><code>cy.get('.error-message').should('be.visible');</code> - Kontrollerar att ett element är synligt.</li>
              <li><code>cy.url().should('include', '/dashboard');</code> - Kollar att webbadressen innehåller förväntad text.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Avancerade Kommandon och Tekniker</h3>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <div>
            <h4 className="font-semibold text-lg">Direkta API-anrop med <code>cy.request()</code></h4>
            <p>För att testa era API-ändpunkter direkt, utan att gå via användargränssnittet, är <code>cy.request()</code> ett mycket effektivt verktyg. Det skickar HTTP-förfrågningar direkt från Cypress till er server, vilket gör det oberoende av webbläsarens tillstånd.</p>
            <p className="mt-2">Några vanliga användningsområden för <code>cy.request()</code> är:</p>
            <ul className="list-disc list-inside ml-4 mt-1">
              <li>Validera API-svar: Kontrollera statuskoder, data i responskroppen och headers.</li>
              <li>Utföra olika typer av HTTP-anrop som GET (hämta data), POST (skapa data).</li>
              <li>Programmatiskt logga in en användare för att snabba upp tester som kräver autentisering, genom att direktanropa inloggnings-API:et.</li>
            </ul>
            <p className="mt-2"><code>cy.request()</code> ger tillgång till hela HTTP-svaret (status, body, headers), vilket möjliggör detaljerade och precisa verifieringar av API:ets beteende.</p>
            <p className="mt-2">Exempel på syntax (konceptuellt, se era specifika testfall för detaljer):</p>
            <ul className="list-disc list-inside ml-4 mt-1">
                <li><code>cy.request('GET', '/api/api/users/1').then(response ={'>'} { '{ ... }' } )</code></li>
                <li><code>cy.request('POST', '/api/users', { '{ name: \'Alice\' }' }).then(response ={'>'} { '{ ... }' } )</code></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg">Komponenttestning med <code>cy.mount()</code></h4>
            <p>Testa inte bara hela flöden – testa även byggstenarna! Cypress stöder komponenttestning med <code>cy.mount()</code>. Rendera och testa enskilda UI-komponenter (React, Vue, Angular etc.) isolerat för snabbare feedback och fokuserad validering av deras funktion och utseende.</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Effektiv Felsökning</h3>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <div>
            <h4 className="font-semibold text-lg">Time Travel Debugger</h4>
            <p>Res i tiden med Cypress "Time Travel Debugger"! Klicka igenom varje teststeg i loggen och se en ögonblicksbild av appens DOM exakt som den var då. Ovärderligt för att snabbt förstå och åtgärda misslyckade tester.</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg">Användbara Felsökningskommandon</h4>
            <p>Några kommandon som underlättar när du felsöker:</p>
            <ul className="list-disc list-inside ml-4 mt-1">
              <li><code>cy.log('Ditt meddelande här')</code>: Skriver ut egna meddelanden i Cypress kommandologg.</li>
              <li><code>cy.pause()</code>: Stoppar testkörningen och låter dig inspektera applikationen och utvecklarverktygen manuellt.</li>
              <li><code>cy.debug()</code>: Skriver ut detaljerad information om det föregående kommandots subjekt till webbläsarens konsol och pausar testet.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}