import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Head from "next/head";
import { withApollo } from "../../lib/apollo";
import IngredientForm from "../../components/ingredient-form";
import { RECIPE_QUERY } from "../../lib/queries";
import IngredientSection from "../../components/ingredients-section";
import InfoValuesSection from "../../components/info-values-section";

const AddIngredients = () => {
	const { query } = useRouter();
	const { loading, data, error } = useQuery(RECIPE_QUERY, {
		skip: !query.id,
		variables: {
			id: query.id,
		},
	});

	return (
		<div>
			<Head>
				<title>Create Recipe</title>
			</Head>
			<IngredientForm recipeId={query.id} />
			{loading && "Loading Ingredientes"}
			{error && `Error ${error.message}`}
			{!loading && !error && data.recipe && (
				<div>
					<IngredientSection ingredients={data.recipe.ingredients} />
					<InfoValuesSection infoValues={data.recipe.info.foodValues} />
				</div>
			)}
		</div>
	);
};

export default withApollo()(AddIngredients);
