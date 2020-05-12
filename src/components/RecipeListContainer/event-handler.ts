export const loadMorePosts = (recipes, fetchMore) => () => {
	fetchMore({
		variables: {
			skip: recipes.length,
		},
		updateQuery: (previousResult: any, { fetchMoreResult }) => {
			if (!fetchMoreResult) {
				return previousResult;
			}
			return {
				recipes: [...previousResult.recipes, ...fetchMoreResult.recipes],
			};
		},
	});
};
