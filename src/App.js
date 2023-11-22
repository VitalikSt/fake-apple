import React from 'react';
import Header from './components/Header/Header';
import NavBar from "./components/NavBar/NavBar";
import GlobalStyle from './components/Common/GlobalStyle.js';

const App = () => {
	return (
			<>
				<GlobalStyle/>
				<Header/>
				<NavBar />
			</>
	)
}

export default App;
