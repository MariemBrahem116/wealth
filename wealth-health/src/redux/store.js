import { configureStore } from '@reduxjs/toolkit'
/* mock data  */
import { employeeMoock } from '../data/employeeMock';
// --------------- STATE INITIALIZATION ---------------
const initialState = {
   isModalShowing: false,
   /* Test data to show a non-empty employee list table */
   employees: employeeMoock
};
// --------------- ACTIONS ---------------
export function toggleModalAction() {
   return {
      type: "TOGGLE_MODAL_ACTION"
   }
}
export function createEmployeeAction() {
   return (dispatch) => {
      const firstNameField = document.getElementById('firstName');
      const lastNameField = document.getElementById('lastName');
      const dateOfBirthField = document.getElementById('dateOfBirth');
      const startDateField = document.getElementById('startDate');
      const streetField = document.getElementById('street');
      const cityField = document.getElementById('city');
      const stateField = document.getElementById('state');
      const zipCodeField = document.getElementById('zipCode');
      const departmentField = document.getElementById('department');
      const fields = [firstNameField, lastNameField, dateOfBirthField, startDateField,
                      streetField, cityField, stateField, zipCodeField, departmentField];

      const firstName = firstNameField.value;
      const lastName = lastNameField.value;
      const dateOfBirth = dateOfBirthField.value;
      const startDate = startDateField.value;
      const street = streetField.value;
      const city = cityField.value;
      const state = stateField.getAttribute("value");
      const zipCode = zipCodeField.value;
      const department = departmentField.getAttribute("value");
      const values = [firstName, lastName, dateOfBirth, startDate,
                      street, city, state, zipCode, department];

      const employee = {
         'firstName': firstName,
         'lastName': lastName,
         'dateOfBirth': dateOfBirth,
         'startDate': startDate,
         'street': street,
         'city': city,
         'state': state,
         'zipCode': zipCode,
         'department': department
      };

      // Show error messages if inputs are empty, or hide if not
      for (let i=0; i < values.length; i++) {
         let errorMessage = fields[i].parentElement.lastChild;
         if (values[i] === '') {
            errorMessage.classList.add('form_error_message--visible');
         }
         else {
            errorMessage.classList.remove('form_error_message--visible');
         }
      }

      let isFormValid = true;
      for (let value of values) {
         if (value === '') {
            isFormValid = false;
         }
      }
      // If all inputs are filled, launch confirmation modal and create a new employee
      if (isFormValid) {
         dispatch(toggleModalAction());
         dispatch(createEmployeeSuccessAction(employee));
         // Empty fields after submitting form
         for (let field of fields) {
            field.value = ''
         }
      }
   }
}
export function createEmployeeSuccessAction(employee) {
   return {
      type: "CREATE_EMPLOYEE_SUCCESS_ACTION",
      payload: { employee }
   }
}
// --------------- REDUCER ---------------
/**
 * Reducer function (Redux)
 * @param { Array } state - Global state
 * @param { Object } action - Action
 * @returns { Array } Updated global state
 */
function reducer(state = initialState, action) {
   switch (action.type) {
      case "TOGGLE_MODAL_ACTION": {
         return {
            ...state,
            isModalShowing: !state.isModalShowing
         }
      }
      case "CREATE_EMPLOYEE_SUCCESS_ACTION": {
         return {
            ...state,
            employees: [...state.employees, action.payload.employee]
         }
      }
      default:
         return state
   }
}
export const store = configureStore({ reducer })