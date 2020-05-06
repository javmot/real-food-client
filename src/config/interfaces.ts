export interface RecipeInterface {
	category: any;
	id: string;
	info: any;
	ingredients: Array<IngredientInterface>;
	steps: Array<any>;
	time: string;
	title: string;
	user: any;
}

export interface IngredientInterface {
	id: string;
	name: string;
	quantity: number;
	unit: string;
}

export interface StepInterface {
	description: string;
	id: string;
	img: string;
	title: string;
}
