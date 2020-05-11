import { ApolloError } from "@apollo/client";
import { FunctionComponent } from "react";

const GenericLoading: JSX.Element = <h1> Loading... </h1>;
const GenericError: (param: ApolloError) => JSX.Element = (error) => (
	<h1> Error: {error.message} </h1>
);

interface withQueryDataProps {
	data: any;
	loading: boolean;
	error: ApolloError;
}

const withQueryData = (
	WrappedComponent: FunctionComponent<any>,
	LoadingComponent: JSX.Element = GenericLoading,
	ErrorComponent: (param: ApolloError) => JSX.Element = GenericError
) => (props: any) => {
	const { loading, data, error, ...componentProps } = props;
	if (loading) {
		return LoadingComponent;
	}

	if (error) {
		return ErrorComponent(props.error);
	}

	return <WrappedComponent data={data} {...componentProps} />;
};

export default withQueryData;
