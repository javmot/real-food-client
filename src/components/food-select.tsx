import withQueryData from "./hocs/with-query-data";
import { FoodInterface } from "../config/interfaces";

interface FoodSelectProps {
	data: FoodInterface[];
	register: any;
	onChange: (param: any) => void;
	name: string;
	label: string;
	placeholder: string;
}

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
