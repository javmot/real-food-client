import { IngredientInterface } from "../config/interfaces";
import withQueryData from "./hocs/with-query-data";

const InfoValuesSection = ({ data: infoValues = [] }: { data: Array<any> }) => {
	if (!infoValues.length) {
		return <div></div>;
	}
	return (
		<div>
			<ul>
				{infoValues.map((value) => (
					<li key={value.id}>
						{value.name}: {value.total} {value.unit}
					</li>
				))}
			</ul>
		</div>
	);
};

export default withQueryData(InfoValuesSection);
