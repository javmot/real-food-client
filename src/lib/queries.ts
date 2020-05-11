import { gql } from "@apollo/client";

export const CREATE_RECIPE_MUTATION = gql`
	mutation CreateRecipe($input: CreateRecipeInput!) {
		createRecipe(input: $input) {
			id
			title
			time
			info {
				name
				foodValues(profile: 1) {
					id
					name
					total
					unit
				}
			}
			category {
				id
				title
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

export const RECIPE_QUERY = gql`
	query Recipe($id: String!) {
		recipe(id: $id) {
			id
			title
			time
			info {
				name
				foodValues(profile: 1) {
					id
					name
					total
					unit
				}
			}
			category {
				id
				title
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

export const GET_FOOD_GROUPS = gql`
	query FoodGroups {
		foodGroups {
			id
			name
		}
	}
`;

export const GET_FOOD_GROUP = gql`
	query FoodGroup($input: String!) {
		foodGroup(input: $input) {
			id
			name
		}
	}
`;

export const ADD_INGREDIENT_MUTATION = gql`
	mutation AddIngredient($ingredient: IngredientInput!, $id: String!) {
		addIngredient(ingredient: $ingredient, id: $id) {
			id
			info {
				name
				foodValues(profile: 1) {
					id
					name
					total
					unit
				}
			}
			ingredients {
				id
				name
			}
		}
	}
`;
