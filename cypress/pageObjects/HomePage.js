import { BasePage } from "../pageObjects/BasePage";

export class HomePage extends BasePage {
    static get url() {
        return "/#/";
    }
    static get clickMakeAppointmentButton() {
        return cy.get('#btn-make-appointment').click()
    }
}