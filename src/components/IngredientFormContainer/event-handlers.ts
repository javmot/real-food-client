import {
	IngredientInterface,
	IngredientFormData,
} from "../../config/interfaces";

export const onSubmitIngredient = (
	recipeId: string | string[],
	addIngredientMutation: (options?: any) => void
) => (ingredients: IngredientInterface[] = []) => (
	formData: IngredientFormData
) => {
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
