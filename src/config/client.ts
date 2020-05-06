import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import fetch from "isomorphic-unfetch";

export const GRAPHQL_URI =
	process.env.GRAPHQL_URI || "http://localhost:9002/graphql";

export default function createApolloClient(initialState, ctx) {
	return new ApolloClient({
		ssrMode: Boolean(ctx),
		cache: new InMemoryCache().restore(initialState),
		link: new HttpLink({
			uri: GRAPHQL_URI,
			credentials: "same-origin",
			fetch,
		}),
	});
}
