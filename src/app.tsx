import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { RootNavigator } from './navigation/components/root-navigator';
import { useDevtools } from './shared/hooks/devtools.hook';
import { useAuthStateListener } from './shared/hooks';

const App = () => {
	useDevtools();

	const { initializing } = useAuthStateListener();

	return (
		<SafeAreaProvider>
			<RootNavigator />
		</SafeAreaProvider>
	);
};

export default App;
