import { useMutation } from "@apollo/client";
import { ADD_INGREDIENT_MUTATION } from "../../lib/queries";
import IngredientForm from "../IngredientForm";
import { onSubmitIngredient } from "./event-handlers";
import { IngredientFormContainerProps } from "./interfaces";

const IngredientFormContainer = ({
	recipeId = "",
}: IngredientFormContainerProps) => {
	const [addIngredientMutation] = useMutation(ADD_INGREDIENT_MUTATION);

	return (
		<IngredientForm
			onSubmitIngredient={onSubmitIngredient(recipeId, addIngredientMutation)}
		/>
	);
};

export default IngredientFormContainer;
