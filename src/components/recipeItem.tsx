import Link from "next/link";
import React from "react";
import { RecipeInterface } from "../config/interfaces";

const RecipeItem = React.memo(
	({ title, id, category, user }: RecipeInterface) => {
		return (
			<div>
				<h3>
					<Link href="/recipes/[id]" as={`/recipes/${id}`}>
						<a>{title}</a>
					</Link>
				</h3>
				<div>
					<small>Category: {category.title}</small>
				</div>
				<div>
					<small>Created by: {user.username}</small>
				</div>
			</div>
		);
	}
);

export default RecipeItem;
