import { RecipeInterface } from "../../config/interfaces";

export interface RecipeListProps {
	recipes: Array<RecipeInterface>;
	onClickLoadMore: () => void;
	loadingMoreRecipes: boolean;
}
