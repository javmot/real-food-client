import { useQuery, NetworkStatus } from "@apollo/client";
import { RECIPES_QUERY } from "../../lib/queries";
import RecipeList from "../RecipeList";
import { loadMorePosts } from "./event-handler";

export const allRecipesVars = {
	skip: 0,
	limit: 10,
};

const RecipeListContainer = () => {
	const defaultData: any = {};

	const {
		loading,
		error,
		data = defaultData,
		fetchMore,
		networkStatus,
	} = useQuery(RECIPES_QUERY, {
		variables: allRecipesVars,
		notifyOnNetworkStatusChange: true,
	});

	const loadingMoreRecipes = networkStatus === NetworkStatus.fetchMore;

	return (
		<>
			<RecipeList
				recipes={data.recipes}
				loading={loading && !loadingMoreRecipes}
				error={error}
				onClickLoadMore={loadMorePosts(data.recipes, fetchMore)}
				loadingMoreRecipes={loadingMoreRecipes}
			/>
		</>
	);
};

export default RecipeListContainer;
