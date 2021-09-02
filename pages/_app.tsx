import "bootstrap/dist/css/bootstrap.css";
import "../css/custom.css";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div className="container-md p-3">
			<Component {...pageProps} />
		</div>
	);
}
export default MyApp;
