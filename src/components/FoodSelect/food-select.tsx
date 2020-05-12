import withQueryData from "../../lib/with-query-data";
import { FoodSelectProps } from "./interfaces";

const FoodSelect = ({
	data = [],
	register,
	onChange = (_) => {},
	name,
	label,
	placeholder,
}: FoodSelectProps) => {
	return (
		<label>
			{label}
			<select
				name={name}
				ref={register}
				onChange={onChange}
				disabled={!data.length}
			>
				<option>{placeholder}</option>
				{data.map((food) => (
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

export default withQueryData(FoodSelect);
