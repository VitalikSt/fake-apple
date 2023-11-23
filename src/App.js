import React from 'react';
import {Routes, Route} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './pages/Home';
import Repair from './pages/Repair';
import GlobalStyle from './components/Common/GlobalStyle';

const App = () => {
	return (
			<>
			<GlobalStyle />
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<Home/>}></Route>
					<Route path="/repair" element={<Repair/>}></Route>
				</Routes>
			</main>
			</>
	)
}

export default App;
