import {
	IngredientInterface,
	IngredientFormData,
} from "../../config/interfaces";

export interface IngredientFormProps {
	onSubmitIngredient: (
		ingredients: IngredientInterface[]
	) => (formData: IngredientFormData) => void;
}
