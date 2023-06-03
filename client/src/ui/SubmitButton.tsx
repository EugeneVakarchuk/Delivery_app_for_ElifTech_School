import React from "react";

type props = {
	isFormValid: boolean;
	text: string;
};

const SubmitButton: React.FC<props> = (props) => {
	return (
		<div>
			<input
				type="submit"
				disabled={props.isFormValid}
				value={props.text}
			/>
		</div>
	);
};

export default SubmitButton;
