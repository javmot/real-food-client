import { gql } from "@apollo/client";

export const CREATE_RECIPE_MUTATION = gql`
	mutation CreateRecipe($input: CreateRecipeInput!) {
		createRecipe(input: $input) {
			id
		}
	}
`;

export const CATEGORIES_QUERY = gql`
	query RecipeCategories {
		recipeCategories {
			id
			title
		}
	}
`;

export const RECIPES_IDS_QUERYSTRING = `
	query Recipes($limit: Int!) {
		recipes(limit: $limit) {
			id
		}
	}
`;

export const RECIPES_QUERY = gql`
	query Recipes($limit: Int, $skip: Int) {
		recipes(limit: $limit, skip: $skip) {
			id
			title
			time
			category {
				title
			}
			user {
				username
			}
			ingredients {
				id
				name
			}
			steps {
				id
				title
				description
			}
		}
	}
`;

export const RECIPE_QUERYSTRING = `
	query Recipe($id: String!) {
		recipe(id: $id) {
			id
			title
			time
			ingredients {
				id
				name
			}
			steps {
				id
				title
				description
			}
		}
	}
`;
