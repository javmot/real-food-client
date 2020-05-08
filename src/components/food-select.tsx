const FoodSelect = ({
	foods,
	register,
	onChange = (_) => {},
	name,
	label,
	placeholder,
}) => {
	return (
		<label>
			{label}
			<select name={name} ref={register} onChange={onChange}>
				<option>{placeholder}</option>
				{foods.map((food) => (
					<option key={food.id} value={food.id}>
						{food.name}
					</option>
				))}
			</select>
			<style jsx>{`
				option:first-child {
					display: none;
				}
			`}</style>
		</label>
	);
};

export default FoodSelect;
