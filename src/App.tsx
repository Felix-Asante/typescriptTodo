import React from "react";
import Header from "./components/Header";
import { GlobalStyles } from "./styles/GlobalStyles.styled";
function App() {
	return (
		<React.Fragment>
			<GlobalStyles />
			<Header />
		</React.Fragment>
	);
}

export default App;
