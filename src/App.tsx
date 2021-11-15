/** @format */

import { StyledGlobal } from './globalStyle';
import Home from './pages/Home';
import Confirmar from './pages/Confirmar';
import Question from './pages/Question';
import Resultado from './pages/Resultado';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<StyledGlobal />
			<Routes>
				<Route index element={<Home />} />
				<Route path='/confirmar' element={<Confirmar />} />
				<Route path='/questao' element={<Question />} />
				<Route path='/resultado' element={<Resultado />} />
			</Routes>
		</Router>
	);
}

export default App;
