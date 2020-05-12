import { RecipeListProps } from "./interfaces";
import RecipeItem from "../RecipeItem";
import withQueryData from "../../lib/with-query-data";

const RecipeList = ({
	recipes = [],
	onClickLoadMore,
	loadingMoreRecipes,
}: RecipeListProps) => {
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

export default withQueryData(RecipeList);
