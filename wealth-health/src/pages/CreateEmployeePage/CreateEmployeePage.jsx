/* react */
import React from 'react';
/* redux  */
import { useSelector } from 'react-redux';
/* css  */
import styles from './CreateEmployePage.module.css'
/* data  */
import { states,departments } from '../../data/state';
/* form button */
import FormButton from '../../components/FormButton/FormButton';
/* modal  */
import Modal from '../../components/Modal/Modal';
/* form */
import FormItem from '../../components/FormItem/FormItem';
/**
 * React component to create the home page containing the form to create an employee
 * @returns { React.ReactElement } CreateEmployeePage
 */
function CreateEmployeePage() {
   const isModalShowing = useSelector((state) => state.isModalShowing);
   return (
      <main className="createWrapper">
         <h2 className={styles.createTitle}>- Create Employee -</h2>
         <form action="#" className={styles.createForm}>
            <div className={styles.createFormContainer}>
               <FormItem type="input" id="firstName" labelTitle="First Name" inputType="text" placeholder="first name" required={true} pattern="^[A-Za-z0-9]{3,16}$" errorMessage="Please enter at least 3 characters without special characters for your firstname !" />
               <FormItem type="input" id="lastName" labelTitle="Last Name" inputType="text" placeholder="last name" required={true} pattern="^[A-Za-z0-9]{3,16}$" errorMessage="Please enter at least 3 characters without special characters for your lastname !" />
            </div>
            <div className={styles.createFormContainer}>
               <FormItem type="input" id="dateOfBirth" labelTitle="Date of Birth" inputType="date" required={true} errorMessage="Please enter a valid date!" />
               <FormItem type="input" id="startDate" labelTitle="Start Date" inputType="date" required={true} errorMessage="Please enter a valid date!" />
            </div>
            <fieldset className={styles.createFormFieldset}>
               <legend className={styles.createFormFieldsetLegend}>Address</legend>
               <div className={styles.createFormContainer}>
                  <FormItem type="input" id="street" labelTitle="Street" inputType="text" placeholder="37 street Benoît" required={true} pattern="^[#.0-9a-zA-Z\s,\-]+$" errorMessage="Please enter a valid address !" />
                  <FormItem type="input" id="city" labelTitle="City" inputType="text" placeholder="Paris" pattern="^[#.0-9a-zA-Z\s,\-]+$" errorMessage="Please enter a valid city !"/>
               </div>
               <div className={styles.createFormContainer }>
                  <FormItem type="select" id="state" labelTitle="State" selectOptions={states} selectAbbreviations={true} />
                  <FormItem type="input" id="zipCode" labelTitle="ZIP Code" inputType="number" placeholder="0" pattern="^[0-9]+$" errorMessage="Please enter your zip code !"
                  />
               </div>
            </fieldset>
            <FormItem type="select" id="department" labelTitle="Department" selectOptions={departments} selectAbbreviations={false} placeholder="Select a departement..."
            />
         </form>
         <FormButton title="Save" />
         {/* CONFIRMATION MODAL: only opened if isModalShowing is true*/}
         <Modal className={styles.modal} isOpen={isModalShowing} contentLabel="Employee created modal" >
            <h2 className="modal_title">Employee Created!</h2>
            <FormButton className="close_modal" title="Close" />
         </Modal>
      </main>
  )
}
export default CreateEmployeePage