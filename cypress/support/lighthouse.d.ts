/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject = any> {
    lighthouse(thresholds?: {
      performance?: number
      accessibility?: number
      seo?: number
      pwa?: number
      'first-contentful-paint'?: number
      'largest-contentful-paint'?: number
      [key: string]: number | undefined
    }): Chainable<any>
  }
}