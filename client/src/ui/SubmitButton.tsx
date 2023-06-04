import React from "react";
import classes from "../styles/ui.module.less";

type props = {
	isFormValid: boolean;
	text: string;
};

const SubmitButton: React.FC<props> = (props) => {
	return (
		<div className={classes.submitButtonContainer}>
			<input
				className={classes.submitButton}
				type="submit"
				disabled={props.isFormValid}
				value={props.text}
			/>
		</div>
	);
};

export default SubmitButton;
