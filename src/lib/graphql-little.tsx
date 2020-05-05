import { GraphQLClient } from "graphql-request";
import { GRAPHQL_URI } from "../config/client";

export default new GraphQLClient(GRAPHQL_URI);
