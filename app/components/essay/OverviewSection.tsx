import React from 'react';

export default function OverviewSection() {
  return (
    <section className="space-y-8">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold text-[var(--primary-color)] mb-4">Introduktion</h2>
        <p className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
          <li>Effektiv utvärdering av nya verktyg är avgörande för hög mjukvarukvalitet.</li>
          <li>Särskilt viktigt för webbutveckling med ramverk som Next.js.</li>
          <li>Denna rapport analyserar Cypress för kvalitetssäkring av Next.js-applikationer.</li>
          <li>Fokus på Cypress kärnfunktioner och praktisk tillämpning inom E2E, komponent, API, visuell regression, tillgänglighet och prestandatestning.</li>
          <li>Mål: Kritisk bedömning och rekommendationer för att optimera verktygets användbarhet och förstå principer för strukturerad kvalitetssäkring.</li>
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold text-[var(--primary-color)] mb-4">Om Testverktyget Cypress</h2>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Kärnkoncept</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed mb-4">
          <li>Populärt open source-ramverk för testautomatisering av moderna webbapplikationer (JS/TS).</li>
          <li>Starkt för E2E-testning, hanterar även komponent- och integrationstester.</li>
          <li>Arkitektur: Kör tester direkt i webbläsaren, i samma exekveringsloop som applikationen.
            <ul className="list-circle list-inside pl-6 mt-1">
              <li>Ger snabbare och mer pålitliga resultat jämfört med t.ex. Selenium.</li>
            </ul>
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">Nyckelfunktioner</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed mb-4">
          <li><span className="font-semibold">Automatisk väntan:</span> Cypress väntar automatiskt på element och nätverksanrop, vilket minskar "flaky tests".</li>
          <li><span className="font-semibold">Time Travel Debugging:</span> Möjliggör granskning av applikationens tillstånd vid varje teststeg via kommandologgen.</li>
          <li><span className="font-semibold">Enkel installation:</span> Kräver oftast inga komplexa beroendekonfigurationer.</li>
          <li><span className="font-semibold">Omfattande dokumentation & aktiv community.</span></li>
        </ul>
      </div>
    </section>
  );
}