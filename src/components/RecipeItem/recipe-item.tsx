import Link from "next/link";
import React from "react";
import { RecipeItemProps } from "./interfaces";

const RecipeItem = React.memo(
	({ title, id, category, user }: RecipeItemProps) => {
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
