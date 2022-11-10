import React from 'react'
import './BasicField.css';

export const BasicField = (props) => {
	const {
		inputId,
		labelText
	} = props;

	return(
		<div class="basic-field__container">
			<label class="basic-field__label">{labelText}</label>
			<input class="basic-field__input" type="text" id={inputId}/>
		</div>
	);
}