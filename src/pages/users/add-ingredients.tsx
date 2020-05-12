import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Head from "next/head";
import { withApollo } from "../../lib/with-apollo";
import { RECIPE_QUERY } from "../../lib/queries";
import IngredientFormContainer from "../../components/IngredientFormContainer";
import IngredientsSection from "../../components/IngredientsSection";
import InfoValuesSection from "../../components/InfoValuesSection";

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
			<IngredientFormContainer recipeId={query.id} />
			<IngredientsSection
				loading={loading}
				error={error}
				ingredients={data && data.recipe && data.recipe.ingredients}
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
