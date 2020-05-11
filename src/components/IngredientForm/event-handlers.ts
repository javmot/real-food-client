export const onChangeGroups = (getFoodGroup) => (e) => {
	getFoodGroup({
		variables: {
			input: e.target.value,
		},
	});
};
