/** @format */

import { createContext, ReactNode, useState } from 'react';

export const OptionContext = createContext({});

interface OptionProviderProps {
	children: ReactNode;
}

export function OptionProvider({ children }: OptionProviderProps) {
	const [option1, setOption1] = useState(false);
	const [option2, setOption2] = useState(false);
	const [option3, setOption3] = useState(false);
	const [option4, setOption4] = useState(false);

	return (
		<OptionContext.Provider
			value={{
				option1,
				setOption1,
				option2,
				setOption2,
				option3,
				setOption3,
				option4,
				setOption4,
			}}>
			{children}
		</OptionContext.Provider>
	);
}
