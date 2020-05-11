import Head from "next/head";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<Head>
				<title>Recipes App</title>
			</Head>
			<h1>Recipes App</h1>
			<Link href="/recipes/blog">
				<a>Recipes Blog</a>
			</Link>
			<br />
			<Link href="/users/new-recipe">
				<a>New Recipe</a>
			</Link>
		</>
	);
}
