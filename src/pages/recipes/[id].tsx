import Head from "next/head";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { RECIPES_IDS_QUERYSTRING, RECIPE_QUERYSTRING } from "../../lib/queries";
import graphqlLittle from "../../lib/graphql-little";
import { RecipeInterface } from "../../config/interfaces";
import IngredientsSection from "../../components/ingredientsSection";
import StepsSection from "../../components/stepsSection";

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
		.request(RECIPE_QUERYSTRING, {
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
	const { recipes } = await graphqlLittle.request(RECIPES_IDS_QUERYSTRING);

	return {
		paths: recipes.map(({ id }) => ({ params: { id } })),
		fallback: true,
	};
}

export default Recipe;
