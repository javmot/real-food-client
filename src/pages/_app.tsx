import "../styles/global.css";
import React from "react";
import whyDidYouRender from "@welldone-software/why-did-you-render";
import { AppProps } from "next/app";

if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
	whyDidYouRender(React, {
		logOwnerReasons: true,
	});
}

export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}
