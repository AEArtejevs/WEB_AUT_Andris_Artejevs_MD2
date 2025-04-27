import { BasePage } from "./BasePage";

export class HistoryPage extends BasePage {
    static get validateNoAppointmentIsVisible() {
        return cy.contains('p', 'No appointment.');
      }
}