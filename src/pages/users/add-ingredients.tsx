import { useRouter } from "next/router";
import { withApollo } from "../../lib/apollo";

const AddIngredients = ({ id }) => {
	const { query } = useRouter();
	return <h1>{query.id}</h1>;
};

export default withApollo()(AddIngredients);
