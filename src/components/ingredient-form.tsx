import { useForm } from "react-hook-form";
import { useQuery, useLazyQuery, useMutation } from "@apollo/client";
import FoodSelect from "./food-select";
import {
	ADD_INGREDIENT_MUTATION,
	GET_FOOD_GROUP,
	GET_FOOD_GROUPS,
} from "../lib/queries";

const IngredientForm = ({ recipeId = "" }: { recipeId: string | string[] }) => {
	const { register, handleSubmit, errors } = useForm();
	const {
		loading: loadingFoodGroups,
		data: foodGroupsData,
		error: foodGroupsError,
	} = useQuery(GET_FOOD_GROUPS);
	const [
		getFoodGroup,
		{ loading: loadingFoodGroup, data: foodGroupData, error: foodGroupError },
	] = useLazyQuery(GET_FOOD_GROUP);
	const [addIngredient] = useMutation(ADD_INGREDIENT_MUTATION);

	if (loadingFoodGroups) return <div>"Loading..."</div>;
	if (foodGroupsError) return <div>`Error! ${foodGroupsError.message}`</div>;

	const onSubmitIngredient = (formData) => {
		const ingredientSelected = foodGroupData.foodGroup.find(
			(ingredient) => ingredient.id === formData.ingredientId
		);
		if (ingredientSelected) {
			addIngredient({
				variables: {
					id: recipeId,
					ingredient: {
						id: ingredientSelected.id,
						name: ingredientSelected.name,
						quantity: parseFloat(formData.quantity),
						unit: "GRAMS",
					},
				},
			});
		}
	};

	const onChangeGroups = (e) => {
		getFoodGroup({
			variables: {
				input: e.target.value,
			},
		});
	};

	return (
		<form onSubmit={handleSubmit(onSubmitIngredient)}>
			<FoodSelect
				foods={foodGroupsData.foodGroups}
				register={register}
				name="foodGroup"
				label="Grupos de alimentos"
				placeholder="Selecciona un grupo"
				onChange={onChangeGroups}
			/>
			{loadingFoodGroup && "Loading"}
			{!loadingFoodGroup && !foodGroupError && foodGroupData && (
				<div>
					<FoodSelect
						foods={foodGroupData.foodGroup}
						register={register({ required: true })}
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
			)}
			<input type="submit" />
		</form>
	);
};

export default IngredientForm;
