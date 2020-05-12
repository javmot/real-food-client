import withQueryData from "../../lib/with-query-data";
import { InfoValuesSectionProps } from "./interfaces";

const InfoValuesSection = ({ data = [] }: InfoValuesSectionProps) => {
	if (!data.length) {
		return <></>;
	}
	return (
		<div>
			<ul>
				{data.map((value) => (
					<li key={value.id}>
						{value.name}: {value.total} {value.unit}
					</li>
				))}
			</ul>
		</div>
	);
};

export default withQueryData(InfoValuesSection);
