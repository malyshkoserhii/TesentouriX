import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { RootNavigator } from './navigation/components/root-navigator';
import { useDevtools } from './shared/hooks/devtools.hook';
import { useAuthStateListener } from './shared/hooks';
import { useAppStore } from './store';

const App = () => {
	useDevtools();

	const { initializing } = useAuthStateListener();

	const [getAllBudgets, addBudget, updateBudget, removeBudget] = useAppStore(
		(state) => [
			state.getAllBudgets,
			state.addBudget,
			state.updateBudget,
			state.removeBudget,
		],
	);

	React.useEffect(() => {
		getAllBudgets();
	}, [addBudget, updateBudget, removeBudget]);

	return (
		<SafeAreaProvider>
			<RootNavigator />
		</SafeAreaProvider>
	);
};

export default App;
