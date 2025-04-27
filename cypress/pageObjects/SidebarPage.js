import { BasePage } from "./BasePage";

export class SidebarPage extends BasePage {

    static get menuToggle() {
        return cy.get('#menu-toggle');
      }
      static get menuActive() {
        return cy.get('#sidebar-wrapper');
      }

      static get clickMenuHistory() {
        return cy.contains('a', 'History');
      }
}