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

export interface FoodInterface {
	id: string;
	name: string;
}

export interface IngredientInterface extends FoodInterface {
	quantity: number;
	unit: string;
}

export interface StepInterface {
	description: string;
	id: string;
	img: string;
	title: string;
}

export interface IngredientFormData {
	foodGroup: string;
	ingredientId: string;
	quantity: string;
}

export interface AnyProperties {
	[prop: string]: any;
}
