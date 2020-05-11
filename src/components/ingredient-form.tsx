import { useForm } from "react-hook-form";
import { useQuery, useLazyQuery } from "@apollo/client";
import FoodSelect from "./food-select";
import { GET_FOOD_GROUP, GET_FOOD_GROUPS } from "../lib/queries";

interface FormData {
	foodGroup: string;
	ingredientId: string;
	quantity: string;
}

const onChangeGroups = (getFoodGroup) => (e) => {
	getFoodGroup({
		variables: {
			input: e.target.value,
		},
	});
};

const IngredientForm = ({ onSubmitIngredient }) => {
	const { register, handleSubmit, errors } = useForm<FormData>();
	const {
		loading: loadingFoodGroups,
		data: foodGroupsData,
		error: foodGroupsError,
	} = useQuery(GET_FOOD_GROUPS);
	const [
		getFoodGroup,
		{ loading: loadingFoodGroup, data: foodGroupData, error: foodGroupError },
	] = useLazyQuery(GET_FOOD_GROUP);

	return (
		<form
			onSubmit={handleSubmit(
				onSubmitIngredient(foodGroupData && foodGroupData.foodGroup)
			)}
		>
			<FoodSelect
				register={register}
				formErrors={errors}
				data={foodGroupsData && foodGroupsData.foodGroups}
				loading={loadingFoodGroups}
				error={foodGroupsError}
				name="foodGroup"
				label="Grupos de alimentos"
				placeholder="Selecciona un grupo"
				onChange={onChangeGroups(getFoodGroup)}
			/>
			<div>
				<FoodSelect
					register={register({ required: true })}
					formErrors={errors}
					data={foodGroupData && foodGroupData.foodGroup}
					loading={loadingFoodGroup}
					error={foodGroupError}
					name="ingredientId"
					label="Alimentos"
					placeholder="Selecciona un alimento"
				/>
				<input
					type="number"
					name="quantity"
					ref={register({ required: true })}
				/>
			</div>
			<input type="submit" />
		</form>
	);
};

export default IngredientForm;
