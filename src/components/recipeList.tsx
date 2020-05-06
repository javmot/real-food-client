import { RecipeInterface } from "../config/interfaces";
import RecipeItem from "./recipeItem";

const RecipeList = ({
	recipes,
	onClickLoadMore,
	loadingMoreRecipes,
}: {
	recipes: Array<RecipeInterface>;
	onClickLoadMore: () => void;
	loadingMoreRecipes: boolean;
}) => {
	return (
		<div>
			{recipes.map((recipe) => {
				return <RecipeItem key={recipe.id} {...recipe} />;
			})}
			<button onClick={() => onClickLoadMore()} disabled={loadingMoreRecipes}>
				Show More
			</button>
		</div>
	);
};

export default RecipeList;
