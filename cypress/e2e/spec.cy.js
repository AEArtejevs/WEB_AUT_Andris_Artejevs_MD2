import { AppointmentPage } from "../pageObjects/AppointmentPage";
import { HomePage } from "../pageObjects/HomePage";
import { LoginPage } from '../pageObjects/LoginPage';
import { SidebarPage } from "../pageObjects/SidebarPage";
import { BasePage, HistoryPage } from "../pageObjects/HistoryPage";
describe('template spec', () => {
  beforeEach(() => {
    HomePage.visit();
  });

  // Scenario 1 - Make an Appointment
  it('Make an Appointment', () => {
    // Click - Make Appointment
    HomePage.clickMakeAppointmentButton.should('be.visible');
    // Set username and password fields with the demo account credentials
    LoginPage.usernameField.type('John Doe');
    LoginPage.passwordField.type('ThisIsNotAPassword');
    LoginPage.loginButton.click();
    // Set the following values:
    // 1. Facility - Seoul CURA Healthcare Center
    AppointmentPage.selectFacility.select('Seoul CURA Healthcare Center');
    // 2. Check - Apply for hospital readmission
    AppointmentPage.applyForHospitalReadmission.click();
    // 3. Select - Medicaid
    AppointmentPage.selectMedicaid.click();
    // 4. Set Date value by using the widget - 30
    AppointmentPage.openCalendar.click();
    AppointmentPage.selectDate.contains('30').click();
    // 5. Set comment - CURA Healthcare Service
    AppointmentPage.txt_comment.type('CURA Healthcare Service', { force: true });
    // 6. Click - Book Appointment
    AppointmentPage.bookAppointmentButton.click();
    // Validate that previously set values are correct
    AppointmentPage.facilityConfirmation.should('have.text', 'Seoul CURA Healthcare Center');
    AppointmentPage.hospitalReadmissionConfirmation.should('have.text', 'Yes');
    AppointmentPage.programConfirmation.should('have.text', 'Medicaid');
    AppointmentPage.visitDateConfirmation.should('contain.text', '30');
    AppointmentPage.commentConfirmation.should('have.text', 'CURA Healthcare Service');
  })


  // Scenario 2 - Appointment history empty
  it.only('Appointment history empty', () => {

    // Click - Make Appointment
    HomePage.clickMakeAppointmentButton.should('be.visible');
    // Set username and password fields with the demo account credentials
    LoginPage.usernameField.type('John Doe');
    LoginPage.passwordField.type('ThisIsNotAPassword');
    // iv. Click - Login
    LoginPage.loginButton.click();
    // v. Click - Menu/Stack/Burger icon
    SidebarPage.menuToggle.click();
    // vi. Validate that the sidebar is active
    SidebarPage.menuActive.should('have.class', 'active');
    // vii. Click - History
    SidebarPage.clickMenuHistory.click();
    // viii. Validate that - No appointment - is visible
    HistoryPage.validateNoAppointmentIsVisible.should('be.visible');

  })
})