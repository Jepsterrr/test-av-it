export const testData = [
  {
    id: 'TC_E2E_LOGIN_001',
    type: 'E2E',
    title: 'Verifiera lyckad inloggning',
    status: 'pass',
    analysis: [ // Analys baserad på Kap 5.2.1
      "Testet passerade och bekräftade att det primära positiva flödet för användarautentisering fungerar.",
      "Cypress-loggen visade korrekt omdirigering till /dashboard och att välkomstmeddelande visades.",
      "Demonstrerade Cypress effektivitet i att simulera användarinteraktioner (textinmatning, klick).",
      "Validering av applikationens tillstånd via URL-kontroller och innehållsverifiering lyckades."
    ]
  },
  {
    id: 'TC_E2E_LOGIN_002',
    type: 'E2E',
    title: 'Verifiera felhantering vid ogiltig inloggning',
    status: 'pass',
    analysis: [ // Analys baserad på Kap 5.2.1
      "Testet passerade och bekräftade att felhanteringen för negativa scenarier i inloggningsprocessen är korrekt implementerad.",
      "Ett felmeddelande visades korrekt på sidan.",
      "Användaren kvarblev på inloggningssidan som förväntat."
    ]
  },
  {
    id: 'TC_COMP_BUTTON_001',
    type: 'Komponent',
    title: 'Verifiera Button-komponentens funktion',
    status: 'pass',
    analysis: [ // Analys baserad på Kap 5.2.2
      "Testet passerade: komponenten renderades korrekt och onClick-stubben anropades en gång efter klick.",
      "Assertionen `expected onClick to have been called exactly once` bekräftades.",
      "Demonstrerar Cypress effektivitet för att testa UI-komponenter i isolering med 'cy.mount()'.",
      "Möjliggör snabb återkoppling och säkerställer att UI-byggstenar fungerar korrekt före integration."
    ]
  },
  {
    id: 'TC_API_GET_USER_001',
    type: 'API',
    title: 'Validera GET-anrop för specifik användare',
    status: 'pass',
    analysis: [ // Analys baserad på Kap 5.2.3
      "Testet passerade: 'cy.request()' skickade en GET-förfrågan till /api/users/1.",
      "Svaret hade korrekt HTTP-statuskod (200).",
      "Responskroppen innehöll den förväntade datan för användaren (id: '1', name: 'Mia Svensson')."
    ]
  },
  {
    id: 'TC_API_POST_USER_001',
    type: 'API',
    title: 'Validera POST-anrop för att skapa ny användare',
    status: 'pass',
    analysis: [ // Analys baserad på Kap 5.2.3
      "Testet passerade: En POST-förfrågan till /api/users med namnet 'Alice'.",
      "Resulterade i HTTP-statuskod 201 (Created).",
      "Responskroppen innehöll den nya användarens data, inklusive ett genererat ID."
    ]
  },
  {
    id: 'TC_VIS_HOMEPAGE_001',
    type: 'Visuell',
    title: 'Visuell regressionstestning av startsidan',
    status: 'fixed',
    analysis: [ // Analys baserad på Kap 5.2.4
      "Initialt misslyckande: `cypress-image-diff-js` rapporterade en visuell skillnad på 8.007%.",
      "Orsak: En toast-notis från Next.js i utvecklingsläge, ej en del av den faktiska designen.",
      "Åtgärd: Elementet doldes med CSS injicerat via Cypress innan skärmdump togs.",
      "Efter justering och uppdatering av baslinjebilden passerade testet.",
      "Belyser utmaningen att skilja på meningsfulla regressioner och irrelevanta skillnader."
    ]
  },
  {
    id: 'TC_A11Y_LOGINFORM_001',
    type: 'Tillgänglighet',
    title: 'Identifiera WCAG-överträdelser på inloggningssidan',
    status: 'fail',
    analysis: [ // Analys baserad på Kap 5.2.5 och 6.4
      "Initialt misslyckande: `cypress-axe` identifierade problem med färgkontrast ('color-contrast on 4 Nodes').",
      "Signifikant fynd: Indikerade tillgänglighetsbrister som kunde försvåra användning för personer med visuella funktionsnedsättningar.",
      "Ledde till direkt åtgärd: Refaktorering av globala CSS-stilar (`globals.css`) för att justera färgpaletten och uppnå tillräcklig kontrast.",
      "Efter CSS-justeringar och återkörning av testet passerade det.",
      "Demonstrerar värdet av tidig integrering av automatiserade tillgänglighetskontroller och iterativ förbättring."
    ]
  },
  {
    id: 'TC_PERF_HOMEPAGE_001',
    type: 'Prestanda',
    title: 'Mäta prestanda på startsidan med Lighthouse',
    status: 'pass',
    chartData: { performance: 82, accessibility: 98 },
    thresholds: { performance: 80, accessibility: 90 },
    analysis: [ // Analys baserad på Kap 5.2.6
        "Testet passerade: Lighthouse-poäng för prestanda (82) och tillgänglighet (98) översteg tröskelvärdena (80 respektive 90).",
        "Indikerar att startsidans prestanda och grundläggande tillgänglighet (enligt Lighthouse) ligger inom acceptabla gränser.",
        "Intressant observation: Lighthouse rapporterade hög tillgänglighetspoäng (98), medan `cypress-axe` (i TC_A11Y_LOGINFORM_001) identifierade specifikt kontrastproblem på inloggningssidan.",
        "Belyser att olika verktyg kan ha olika fokusområden och känslighet; kompletterande verktyg ger en mer heltäckande bild."
    ]
  },
];