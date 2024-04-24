import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { RootNavigator } from './navigation/components/root-navigator';
import { useDevtools } from './shared/hooks/devtools.hook';
import { useAuthStateListener, useSplashScreen } from './shared/hooks';
import { useAppStore } from './store';

const App = () => {
	useDevtools();

	useSplashScreen();

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
