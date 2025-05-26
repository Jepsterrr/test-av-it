/// <reference types="@cypress-audit/lighthouse" />

declare namespace Cypress {
    interface Chainable{
        cssType(locator: string, text: string): void;
    }
}