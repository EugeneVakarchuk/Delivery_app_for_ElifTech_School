import React, {InputHTMLAttributes} from "react";
import {UseFormRegisterReturn} from "react-hook-form";
import classes from "../styles/ui.module.less";

interface props extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
	placeholder: string;
	type: string;
	register: UseFormRegisterReturn;
	errors?: string | undefined;
}

const Input: React.FC<props> = (props) => {
	return (
		<div className={classes.InputContainer}>
			<label className={classes.label}>{props.label}</label>
			<input
				className={
					props.errors
						? `${classes.input} ${classes.InputError}`
						: classes.input
				}
				placeholder={props.placeholder}
				type={props.type}
				{...props.register}
			/>
			<div className={classes.errorContainer}>
				{props.errors && (
					<span className={classes.errorText}>{props.errors}</span>
				)}
			</div>
		</div>
	);
};

export default Input;
