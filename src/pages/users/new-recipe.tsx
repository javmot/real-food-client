import Head from "next/head";
import Router from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import { useForm } from "react-hook-form";
import { withApollo } from "../../lib/with-apollo";
import { CREATE_RECIPE_MUTATION, CATEGORIES_QUERY } from "../../lib/queries";

const Blog = () => {
	const { register, handleSubmit, errors } = useForm();
	const [addTodo, response] = useMutation(CREATE_RECIPE_MUTATION);
	const { loading, error, data: { recipeCategories = [] } = {} } = useQuery(
		CATEGORIES_QUERY
	);

	const onSubmit = (formData) =>
		addTodo({
			variables: {
				input: {
					...formData,
					servings: parseInt(formData.servings, 10),
				},
			},
		});

	if (loading) return <h1>Loading</h1>;
	if (error) return <h1>Error</h1>;
	if (response.called && !response.loading && !response.error) {
		Router.push({
			pathname: "/users/add-ingredients",
			query: {
				id: response.data.createRecipe.id,
			},
		});
	}

	return (
		<div>
			<Head>
				<title>Create Recipe</title>
			</Head>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input name="title" ref={register({ required: true })} />
				<input name="time" ref={register({ required: true })} />
				<input
					type="number"
					name="servings"
					ref={register({ required: true })}
				/>
				<select name="categoryId" ref={register({ required: true })}>
					<option>Categories</option>
					{recipeCategories.map((category) => (
						<option key={category.id} value={category.id}>
							{category.title}
						</option>
					))}
				</select>
				<input type="submit" />
			</form>
		</div>
	);
};

export default withApollo()(Blog);
