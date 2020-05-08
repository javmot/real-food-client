import { IngredientInterface } from "../config/interfaces";

const IngredientsSection = ({
	ingredients,
}: {
	ingredients: IngredientInterface[];
}) => {
	if (!ingredients.length) {
		return <div></div>;
	}
	return (
		<div>
			<h3>{ingredients.length} Ingredients</h3>
			<ul>
				{ingredients.map((ingredient) => (
					<li key={ingredient.id}>
						{ingredient.quantity} {ingredient.unit} {ingredient.name}
					</li>
				))}
			</ul>
		</div>
	);
};

export default IngredientsSection;
