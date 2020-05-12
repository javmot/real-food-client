import Head from "next/head";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { print } from "graphql/language/printer";
import { RECIPES_IDS_QUERY, RECIPE_QUERY } from "../../lib/queries";
import graphqlLittle from "../../lib/graphql-little";
import { RecipeInterface } from "../../config/interfaces";
import IngredientsSection from "../../components/IngredientsSection";
import StepsSection from "../../components/StepsSection";

function Recipe({ recipe, errors }: { recipe: RecipeInterface; errors: any }) {
	const { isFallback } = useRouter();

	if (isFallback) {
		return <div>Loading...</div>;
	}

	if (errors) {
		return <ErrorPage statusCode={404} />;
	}

	return (
		<div>
			<Head>
				<title>{recipe.title}</title>
			</Head>
			<h1>{recipe.title}</h1>
			<IngredientsSection ingredients={recipe.ingredients} />
			<StepsSection steps={recipe.steps} />
		</div>
	);
}

export async function getStaticProps({ params }) {
	return graphqlLittle
		.request(print(RECIPE_QUERY), {
			id: params.id,
		})
		.then(({ recipe, errors = false }) => ({
			props: {
				recipe,
				errors,
			},
		}))
		.catch(() => ({
			props: {
				recipe: null,
				errors: true,
			},
		}));
}

export async function getStaticPaths() {
	const { recipes } = await graphqlLittle.request(print(RECIPES_IDS_QUERY), {
		limit: 0,
	});

	return {
		paths: recipes.map(({ id }) => ({ params: { id } })),
		fallback: true,
	};
}

export default Recipe;
