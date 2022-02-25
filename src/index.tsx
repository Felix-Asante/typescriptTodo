import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import App from "./App";
import { ThemeProvider } from "styled-components";

const theme = {
	colors: {
		primary: {
			main: "#2f74c0",
			shade: "#79b3f2",
		},
		secondary: "#32c3cd",
		danger: "#eb6750",
		light: "#ffff",
	},
};
ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
