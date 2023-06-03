import React, {InputHTMLAttributes} from "react";
import {UseFormRegisterReturn} from "react-hook-form";

interface props extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
	placeholder: string;
	type: string;
	register: UseFormRegisterReturn;
	errors?: string | undefined;
}

const Input: React.FC<props> = (props) => {
	return (
		<div>
			<label>{props.label}</label>
			<input
				placeholder={props.placeholder}
				type={props.type}
				{...props.register}
			/>
			<div>{props.errors && <span>{props.errors}</span>}</div>
		</div>
	);
};

export default Input;
