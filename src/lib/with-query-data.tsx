import { ApolloError } from "@apollo/client";
import { FunctionComponent } from "react";
import { AnyProperties } from "../config/interfaces";

interface WithQueryDataProps extends AnyProperties {
	loading?: boolean;
	error?: ApolloError;
}

type ParseApolloError = (param: ApolloError) => JSX.Element;

const GenericLoading: JSX.Element = <h1> Loading... </h1>;
const GenericError: ParseApolloError = (error) => (
	<h1> Error: {error.message} </h1>
);

const withQueryData = (
	WrappedComponent: FunctionComponent<any>,
	LoadingComponent: JSX.Element = GenericLoading,
	ErrorComponent: ParseApolloError = GenericError
): FunctionComponent<WithQueryDataProps> => ({
	loading,
	error,
	...componentProps
}: WithQueryDataProps) => {
	if (loading) {
		return LoadingComponent;
	}

	if (error) {
		return ErrorComponent(error);
	}

	return <WrappedComponent {...componentProps} />;
};

export default withQueryData;
