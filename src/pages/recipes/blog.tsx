import Head from "next/head";
import { withApollo } from "../../lib/with-apollo";
import RecipeListContainer from "../../components/RecipeListContainer";

const Blog = () => {
	return (
		<div>
			<Head>
				<title>Recipes Blog</title>
			</Head>
			<h1>Recipes Blog</h1>
			<RecipeListContainer />
		</div>
	);
};

export default withApollo({ ssr: true })(Blog);
