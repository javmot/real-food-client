import { gql } from "@apollo/client";

// FRAGMENTS

const recipeFragments = {
	base: gql`
		fragment RecipeBase on Recipe {
			title
			time
			category {
				id
				title
			}
			user {
				username
			}
		}
	`,
	info: gql`
		fragment RecipeInfo on Recipe {
			info {
				name
				foodValues(profile: 1) {
					id
					name
					total
					unit
				}
			}
		}
	`,
	ingredients: gql`
		fragment RecipeIngredients on Recipe {
			ingredients {
				id
				name
			}
		}
	`,
	steps: gql`
		fragment RecipeSteps on Recipe {
			steps {
				id
				title
				description
			}
		}
	`,
};

// QUERIES

export const RECIPES_IDS_QUERY = gql`
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
			...RecipeBase
		}
	}
	${recipeFragments.base}
`;

export const RECIPE_QUERY = gql`
	query Recipe($id: String!) {
		recipe(id: $id) {
			id
			...RecipeBase
			...RecipeInfo
			...RecipeIngredients
			...RecipeSteps
		}
	}
	${recipeFragments.base}
	${recipeFragments.info}
	${recipeFragments.ingredients}
	${recipeFragments.steps}
`;

export const CATEGORIES_QUERY = gql`
	query RecipeCategories {
		recipeCategories {
			id
			title
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

// MUTATIONS

export const CREATE_RECIPE_MUTATION = gql`
	mutation CreateRecipe($input: CreateRecipeInput!) {
		createRecipe(input: $input) {
			id
			...RecipeBase
			...RecipeInfo
			...RecipeIngredients
			...RecipeSteps
		}
	}
	${recipeFragments.base}
	${recipeFragments.info}
	${recipeFragments.ingredients}
	${recipeFragments.steps}
`;

export const ADD_INGREDIENT_MUTATION = gql`
	mutation AddIngredient($ingredient: IngredientInput!, $id: String!) {
		addIngredient(ingredient: $ingredient, id: $id) {
			id
			...RecipeInfo
			...RecipeIngredients
		}
	}
	${recipeFragments.info}
	${recipeFragments.ingredients}
`;
