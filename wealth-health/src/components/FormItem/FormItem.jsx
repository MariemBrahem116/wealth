/* react */
import React from 'react';
/* prop types */
import propTypes from 'prop-types';
/* css  */
import  '../FormItem/FormItem.css';
/* select component    */
import Select from 'select-react-by-mariem';
/**
 * React component to create a form item with an input or a select
 * @param { {type: String, id: String, labelTitle: String, inputType: String, selectOptions: Array, selectAbbreviations: Boolean} } props - type: 'input' or 'select', id: input id, labelTitle: label text, inputType: "date", "text", etc., selectOptions: array of options, selectAbbreviations: true if options are objects with name and abbreviation properties / false if option array is simple
 * @returns { React.ReactElement } FormItem component
 */
function FormItem(props) {
   return (
      <div className="form_item">
         <label className="form_label" htmlFor={props.id}>
            {props.labelTitle}
         </label>
         <div className="form_input_message_wrapper">
            {props.type === 'input' ? (
               <input
               className="form_input"
               type={props.inputType}
               id={props.id}
               placeholder={props.placeholder}
               required={props.required}
               pattern={props.pattern}
               />
            ) : (
               <Select
               id={props.id}
               options={props.selectOptions}
               abbreviations={props.selectAbbreviations} primaryColor="#94AC19" greyColor="#6c8312" lightGreyColor="#dcf2cc"
               />
            )}
            <span className="form_error_message">
              {props.errorMessage}
            </span>
         </div>
      </div>
   );
}
FormItem.propTypes = {
   type: propTypes.string.isRequired,
   id: propTypes.string.isRequired,
   labelTitle: propTypes.string.isRequired,
   inputType: propTypes.string,
   selectOptions: propTypes.array,
   selectAbbreviations: propTypes.bool,
};
export default FormItem;
