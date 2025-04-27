import { BasePage } from "./BasePage";

export class AppointmentPage extends BasePage {

    static get selectFacility() {
      return cy.get('#combo_facility');
    }
    static get applyForHospitalReadmission() {
        return cy.get('#chk_hospotal_readmission');
    }
    static get selectMedicaid() {
        return cy.get('#radio_program_medicaid');
    }
    static get openCalendar() {
        return cy.get('.glyphicon-calendar');
    }  
    static get selectDate() {
        return cy.get('.day');
    }
    static get txt_comment() {
        return cy.get('#txt_comment');
    }
    static get bookAppointmentButton() {
        return cy.get('#btn-book-appointment');
    }
    // validation
    static get facilityConfirmation() {
        return cy.get('#facility');
    }

    static get hospitalReadmissionConfirmation() {
        return cy.get('#hospital_readmission');
    }

    static get programConfirmation() {
        return cy.get('#program');
    }

    static get visitDateConfirmation() {
        return cy.get('#visit_date');
    }

    static get commentConfirmation() {
        return cy.get('#comment');
    }
  
  }