import { defineConfig } from 'cypress'
const { lighthouse, prepareAudit } = require('@cypress-audit/lighthouse')

export default defineConfig({
  projectId: 'imhm9e',
  e2e: {
    baseUrl: 'http://localhost:3000',
    supportFile: 'cypress/support/e2e.ts',
    specPattern: 'cypress/e2e/**/*.cy.ts',
    setupNodeEvents(on, config) {
      require('cypress-image-diff-js/plugin')(on, config)

      on('before:browser:launch', (browser, launchOptions) => {
        prepareAudit(launchOptions);
      });

      on('task', {
        lighthouse: lighthouse()
      })

      return config
    },
  },
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
    supportFile: 'cypress/support/component.ts',
    specPattern: 'cypress/component/**/*.cy.tsx',
    indexHtmlFile: 'cypress/support/component-index.html',
  },
})