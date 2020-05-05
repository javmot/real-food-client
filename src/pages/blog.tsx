import Head from "next/head";
import Link from "next/link";
import { useQuery } from "@apollo/client";
import { RECIPES_QUERY } from "../lib/queries";
import { withApollo } from "../lib/apollo";

const Blog = () => {
	const { loading, error, data } = useQuery(RECIPES_QUERY);

	if (error) return <div>Error</div>;
	if (loading) return <div>Loading</div>;

	console.log("data :>> ", data);

	return (
		<div>
			<Head>
				<title>Recipes Blog</title>
			</Head>
			<h1>Recipes</h1>
			{data.recipes.map((recipe) => (
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
		</div>
	);
};

export default withApollo({ ssr: true })(Blog);
