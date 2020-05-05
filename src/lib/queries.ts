import { gql } from "@apollo/client";

export const RECIPES_QUERY = gql`
	query Recipe {
		recipes {
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
