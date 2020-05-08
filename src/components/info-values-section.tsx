import { IngredientInterface } from "../config/interfaces";

const InfoValuesSection = ({ infoValues = [] }: { infoValues: Array<any> }) => {
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

export default InfoValuesSection;
