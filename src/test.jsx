import React, { useEffect } from 'react';
import ThemeSwitcher from './components/ThemeSwitcher/index';
import {useLocalStorage} from './hooks/useLocalStorage'
import * as themes from './styles/themes'
import ThemeContext from './styles/themes/context'
import Global from "./testS.jsx"
import Inputzin from "./components/inputzin"
import { ThemeProvider } from 'styled-components';

function App() {
	
	const [sTheme,setStheme] = useLocalStorage("theme",{theme: themes.light})
	const [tema, setTema] = useLocalStorage("bagui",false)

	useEffect(() => {
		setStheme({theme: tema === false ? themes.light : themes.dark})
	}, [tema]);

	
	
	


	return (
		<>
			
			<ThemeContext.Provider value={sTheme}>

				<ThemeContext.Consumer>
					{themel => (
						<>
						<ThemeProvider theme={themel}>
							<ThemeSwitcher  men={tema === false ? "Dark Mode" : "Light Mode"} sla={() => { tema === false ? setTema(true) : setTema(false) }} />
							<Inputzin />
							<Global/>
							</ThemeProvider>
						</>
					)}
				</ThemeContext.Consumer>

			</ThemeContext.Provider>
		</>
	);
}

export default App;