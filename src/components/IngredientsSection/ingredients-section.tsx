import { IngredientsSectionProps } from "./interfaces";
import withQueryData from "../../lib/with-query-data";

const IngredientsSection = ({ ingredients = [] }: IngredientsSectionProps) => {
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

export default withQueryData(IngredientsSection);
