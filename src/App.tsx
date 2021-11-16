/** @format */

import { StyledGlobal } from './globalStyle';
import Home from './pages/Home';
import Confirmar from './pages/Confirmar';
import Question from './pages/Question';
import Resultado from './pages/Resultado';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QuestionProvider } from './context/QuestionsContext';

function App() {
	return (
		<Router>
			<StyledGlobal />
			<QuestionProvider>
				<Routes>
					<Route index element={<Home />} />
					<Route path='/confirmar/:id' element={<Confirmar />} />
					<Route path='/questao' element={<Question />} />
					<Route path='/resultado' element={<Resultado />} />
				</Routes>
			</QuestionProvider>
		</Router>
	);
}

export default App;
