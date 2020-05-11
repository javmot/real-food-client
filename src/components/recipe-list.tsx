import { RecipeInterface } from "../config/interfaces";
import RecipeItem from "./recipe-item";
import withQueryData from "./hocs/with-query-data";

const RecipeList = ({
	data: recipes,
	onClickLoadMore,
	loadingMoreRecipes,
}: {
	data: Array<RecipeInterface>;
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

export default withQueryData(RecipeList);
