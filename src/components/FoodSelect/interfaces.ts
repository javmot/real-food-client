import { FoodInterface } from "../../config/interfaces";

export interface FoodSelectProps {
	data: FoodInterface[];
	register: any;
	onChange: (param: any) => void;
	name: string;
	label: string;
	placeholder: string;
}
