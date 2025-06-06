import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {

    static get usernameField() {
        return cy.get('#txt-username');
      }
    
      static get passwordField() {
        return cy.get('#txt-password');
      }
    
      static get loginButton() {
        return cy.get('#btn-login');
      }


}