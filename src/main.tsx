import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App.tsx';
import GlobalStyles from '~/components/GlobalStyles/index.tsx';
import { store } from '~/store/store';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<GlobalStyles>
			<Provider store={store}>
				<Router>
					<App />
				</Router>
			</Provider>
		</GlobalStyles>
	</StrictMode>
);
