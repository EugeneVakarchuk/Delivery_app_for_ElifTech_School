import React, {useState} from "react";
import Input from "../ui/Input";
import {useForm} from "react-hook-form";
import SubmitButton from "../ui/SubmitButton";
import OrderService from "../services/OrderService";

const CartForm: React.FC = () => {
	const cartId = localStorage.getItem("cartId");

	type FormValues = {
		name: string;
		email: string;
		tel: string;
		adress: string;
	};

	const {
		register,
		formState: {errors, isValid},
		handleSubmit,
	} = useForm<FormValues>({
		mode: "onBlur",
	});

	const onSubmit = async (data: FormValues) => {
		const newOrder = await OrderService.createNewOrder(
			data.name,
			data.adress,
			data.tel,
			data.email,
			cartId
		);
		console.log(newOrder);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div>
				<Input
					label="Name:"
					placeholder="Your name"
					type="text"
					errors={errors?.name?.message}
					register={register("name", {
						required: "Name is required",
						minLength: {
							value: 3,
							message: "Name is too short",
						},
						maxLength: {
							value: 16,
							message: "Name is too long",
						},
					})}
				/>
				<Input
					label="Email:"
					placeholder="Your email"
					type="email"
					errors={errors?.email?.message}
					register={register("email", {
						required: "Email is required",
						pattern: {
							value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
							message: "Please enter a valid email",
						},
					})}
				/>
				<Input
					label="Phone:"
					placeholder="Contact number"
					type="tel"
					errors={errors?.tel?.message}
					register={register("tel", {
						required: "Phone is required",
						pattern: {
							value: /^(?:\+38)?(?:\([0-9]{3}\)[ .-]?[0-9]{3}[ .-]?[0-9]{2}[ .-]?[0-9]{2}|044[ .-]?[0-9]{3}[ .-]?[0-9]{2}[ .-]?[0-9]{2}|[0-9]{10})$/gm,
							message: "Please enter a valid contact number",
						},
					})}
				/>
				<Input
					label="Adress:"
					placeholder="Delivery address"
					type="text"
					errors={errors?.adress?.message}
					register={register("adress", {
						required: "Adress is required",
						minLength: {
							value: 10,
							message: "Delivery address is too short",
						},
					})}
				/>
			</div>
			<SubmitButton text="Submit" isFormValid={!isValid} />
		</form>
	);
};

export default CartForm;
