import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import fetch from "isomorphic-unfetch";

export default function createApolloClient(initialState, ctx) {
	return new ApolloClient({
		ssrMode: Boolean(ctx),
		cache: new InMemoryCache().restore(initialState),
		link: new HttpLink({
			uri: "http://localhost:3333/graphql",
			credentials: "same-origin",
			fetch,
		}),
	});
}
