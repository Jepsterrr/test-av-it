import React from 'react';

export default function OverviewSection() {
  return (
    <section className="space-y-8">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold text-[var(--primary-color)] mb-4">Introduktion</h2>
        <p className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
          <li>Kompatibel för webbutveckling med ramverk som Next.js (Användning av pages/ och data-cy).</li>
          <li>Tillämpbar inom E2E, komponent, API, visuell regression, tillgänglighet och prestanda.</li>
          <li>Konfigurering av Cypress</li>
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold text-[var(--primary-color)] mb-4">Om Testverktyget Cypress</h2>
        <p className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
          <li><span className="font-semibold">Automatisk väntan:</span> Cypress väntar automatiskt på element och nätverksanrop.</li>
          <li><span className="font-semibold">Time Travel Debugging:</span> Möjliggör granskning av applikationens tillstånd vid varje teststeg via kommandologgen.</li>
          <li><span className="font-semibold">Enkel installation:</span> Kräver oftast inga komplexa beroendekonfigurationer.</li>
          <li><span className="font-semibold">Inbyggd testkörning:</span> Kör tester direkt i webbläsaren med realtidsfeedback.</li>
          <li><span className="font-semibold">Stöd för plugins:</span> Utökar funktionaliteten med plugins som 'cypress-axe' tillsammans med '@cypress-audit/lighthouse' för tillgänglighetstestning och 'cypress-image-diff-js' för visuell regression.</li>
        </p>
      </div>
    </section>
  );
}