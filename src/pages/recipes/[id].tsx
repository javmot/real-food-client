import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { RECIPE_QUERY } from "../../lib/queries";
import { withApollo } from "../../lib/apollo";

function Recipe() {
	const router = useRouter();
	const { id } = router.query;
	const { loading, error, data } = useQuery(RECIPE_QUERY, {
		variables: { id },
	});

	if (error) return <div>Error</div>;
	if (loading) return <div>Loading</div>;

	return (
		<div>
			<h1>{data.recipe.title}</h1>
		</div>
	);
}

export default withApollo({ ssr: true })(Recipe);
