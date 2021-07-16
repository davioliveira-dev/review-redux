import { Provider } from 'react-redux';
import { Users } from './components/Users';
import { store } from './store';

export function App() {
	return (
		<Provider store={store}>
			<h1>Olá mundo</h1>
			<Users />
		</Provider>
	);
}
