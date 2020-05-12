import { StepsSectionProps } from "./interfaces";
import withQueryData from "../../lib/with-query-data";

const StepsSection = ({ steps = [] }: StepsSectionProps) => {
	return (
		<div>
			<h3>{steps.length} Steps</h3>
			{steps.map((step) => (
				<div key={step.id}>
					<h2>{step.title}</h2>
					<img src={step.img} alt={step.title} />
					<p>{step.description}</p>
				</div>
			))}
		</div>
	);
};

export default withQueryData(StepsSection);
