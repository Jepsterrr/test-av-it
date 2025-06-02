import React from 'react';

export default function DiscussionSection() {
  return (
    <section id="diskussionRapport" className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold text-[var(--primary-color)] mb-4">Diskussion och Slutsats</h2>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Sammanfattning av Huvudresultat</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed mb-4">
          <li><span className="font-semibold">Funktionell stabilitet:</span> Kärnfunktioner som autentisering (E2E) och API-operationer (GET/POST) fungerar korrekt.</li>
          <li><span className="font-semibold">Identifierad & åtgärdad tillgänglighetsbrist:</span> Problem med färgkontrast på inloggningssidan upptäcktes med 'cypress-axe' och korrigerades.</li>
          <li><span className="font-semibold">Hantering av visuell regression:</span> Testet krävde anpassning för utvecklingsspecifika UI-element men kunde sedan bekräfta visuell stabilitet.</li>
          <li><span className="font-semibold">Godkänd prestanda:</span> Startsidan uppfyllde prestandamålen enligt Lighthouse-audit.</li>
          <li><span className="font-semibold">Lyckat komponenttest:</span> Button-komponenten fungerade korrekt i isolerad miljö.</li>
        </ul>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold text-green-700 mb-3 flex items-center">
            Observerade Styrkor med Cypress
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><span className="font-semibold">Effektiv E2E-testning:</span> Kapabelt för komplexa användarflöden i Next.js; inbyggd väntemekanism och tydliga loggar.</li>
            <li><span className="font-semibold">Robust API-testning:</span> 'cy.request()' möjliggjorde effektiv validering av backend-logik.</li>
            <li><span className="font-semibold">Effektiv komponenttestning:</span> 'cy.mount()' och 'cy.stub()' för isolerade UI-tester med snabb feedback.</li>
            <li><span className="font-semibold">Kraftfullt plugin-ekosystem:</span> Plugins som 'cypress-axe', 'cypress-image-diff-js', '@cypress-audit/lighthouse' utökar funktionaliteten och centraliserar kvalitetskontroller.</li>
            <li><span className="font-semibold">God utvecklarupplevelse:</span> Time Travel Debugging, detaljerade loggar och automatiska skärmdumpar.</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold text-red-700 mb-3 flex items-center">
            Svagheter & Metodologiska Överväganden
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><span className="font-semibold">Anpassning av visuella tester:</span> Kan kräva manuell konfiguration för dynamiska/utvecklingsspecifika element; en inneboende utmaning.</li>
            <li><span className="font-semibold">Tillförlitlighet hos automatiserade verktyg:</span> Kan inte identifiera alla problem; kan ge falska positiva/negativa. Olika verktyg har olika fokus (jmf. Lighthouse vs. cypress-axe).</li>
            <li><span className="font-semibold">Inlärningskurva:</span> Du behöver kunskap över JS/TS, lära dig vilka olika metoder som finns samt förstå vad utskrifterna betyder.</li>
            <li><span className="font-semibold">Prestandatestning:</span> Lighthouse ger en ögonblicksbild; kan behöva kompletteras med mer omfattande verktyg för kontinuerlig övervakning.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}