import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { RECIPES_IDS_QUERYSTRING, RECIPE_QUERYSTRING } from "../../lib/queries";
import graphqlLittle from "../../lib/graphql-little";

function Recipe({ recipe }) {
	const { isFallback } = useRouter();

	if (isFallback) {
		return <div>Loading...</div>;
	}

	if (recipe && recipe.error) {
		return <ErrorPage statusCode={404} />;
	}

	return (
		<div>
			<h1>{recipe.title}</h1>
		</div>
	);
}

export async function getStaticProps({ params }) {
	const { recipe } = await graphqlLittle.request(RECIPE_QUERYSTRING, {
		id: params.id,
	});

	return {
		props: {
			recipe,
		},
	};
}

export async function getStaticPaths() {
	const { recipes } = await graphqlLittle.request(RECIPES_IDS_QUERYSTRING);

	return {
		paths: recipes.map(({ id }) => ({ params: { id } })),
		fallback: false,
	};
}

export default Recipe;
