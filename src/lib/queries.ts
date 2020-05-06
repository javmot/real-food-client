import { gql } from "@apollo/client";

export const RECIPES_IDS_QUERYSTRING = `
	query Recipes {
		recipes {
			id
		}
	}
`;

export const RECIPES_QUERY = gql`
	query recipes($limit: Int, $skip: Int) {
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
