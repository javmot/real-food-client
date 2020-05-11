import Head from "next/head";
import { useQuery, NetworkStatus } from "@apollo/client";
import { RECIPES_QUERY } from "../../lib/queries";
import { withApollo } from "../../lib/apollo";
import RecipeList from "../../components/recipe-list";

export const allRecipesVars = {
	skip: 0,
	limit: 10,
};

const Blog = () => {
	const { loading, error, data, fetchMore, networkStatus } = useQuery(
		RECIPES_QUERY,
		{
			variables: allRecipesVars,
			notifyOnNetworkStatusChange: true,
		}
	);

	const loadingMoreRecipes = networkStatus === NetworkStatus.fetchMore;

	const { recipes = [] } = data || {};

	const loadMorePosts = () => {
		fetchMore({
			variables: {
				skip: recipes.length,
			},
			updateQuery: (previousResult: any, { fetchMoreResult }) => {
				if (!fetchMoreResult) {
					return previousResult;
				}
				return {
					recipes: [...previousResult.recipes, ...fetchMoreResult.recipes],
				};
			},
		});
	};

	return (
		<div>
			<Head>
				<title>Recipes Blog</title>
			</Head>
			<h1>Recipes Blog</h1>
			<RecipeList
				data={recipes}
				loading={loading && !loadingMoreRecipes}
				error={error}
				onClickLoadMore={loadMorePosts}
				loadingMoreRecipes={loadingMoreRecipes}
			/>
		</div>
	);
};

export default withApollo({ ssr: true })(Blog);
