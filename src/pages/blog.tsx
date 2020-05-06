import Head from "next/head";
import Link from "next/link";
import { useQuery, NetworkStatus } from "@apollo/client";
import { RECIPES_QUERY } from "../lib/queries";
import { withApollo } from "../lib/apollo";

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

	if (error) return <div>Error</div>;
	if (loading) return <div>Loading</div>;

	const { recipes } = data;
	const loadingMoreRecipes = networkStatus === NetworkStatus.fetchMore;

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
					...previousResult,
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
			<h1>Recipes</h1>
			{recipes.map((recipe) => (
				<div key={recipe.id}>
					<h2>
						<Link href="/recipes/[id]" as={`/recipes/${recipe.id}`}>
							<a>{recipe.title}</a>
						</Link>
					</h2>
					<ul>
						{recipe.ingredients.map((ingredient) => (
							<li key={ingredient.id}>{ingredient.name}</li>
						))}
					</ul>
				</div>
			))}
			<button onClick={() => loadMorePosts()} disabled={loadingMoreRecipes}>
				Show More
			</button>
		</div>
	);
};

export default withApollo({ ssr: true })(Blog);
