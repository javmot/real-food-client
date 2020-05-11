import { useMutation } from "@apollo/client";
import { ADD_INGREDIENT_MUTATION, RECIPE_QUERY } from "../lib/queries";
import FormIngredient from "./ingredient-form";

const FormIngredientContainer = ({
	recipeId = "",
}: {
	recipeId: string | string[];
}) => {
	const [addIngredientMutation] = useMutation(ADD_INGREDIENT_MUTATION);

	const onSubmitIngredient = (ingredients = []) => (formData) => {
		const ingredientSelected = ingredients.find(
			(ingredient) => ingredient.id === formData.ingredientId
		);
		if (ingredientSelected) {
			addIngredientMutation({
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

	return <FormIngredient onSubmitIngredient={onSubmitIngredient} />;
};

export default FormIngredientContainer;
