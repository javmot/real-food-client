import { RecipeInterface } from "../../config/interfaces";

export interface RecipeListProps {
	data: Array<RecipeInterface>;
	onClickLoadMore: () => void;
	loadingMoreRecipes: boolean;
}
