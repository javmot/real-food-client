import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Head from "next/head";
import { withApollo } from "../../lib/apollo";
import { RECIPE_QUERY } from "../../lib/queries";
import FormIngredientContainer from "../../components/ingredient-form-container";
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
			<FormIngredientContainer recipeId={query.id} />
			<IngredientSection
				loading={loading}
				error={error}
				data={data && data.recipe && data.recipe.ingredients}
			/>
			<InfoValuesSection
				data={data && data.recipe && data.recipe.info.foodValues}
				loading={loading}
				error={error}
			/>
		</div>
	);
};

export default withApollo()(AddIngredients);
