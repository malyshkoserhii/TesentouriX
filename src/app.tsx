import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { RootNavigator } from './navigation/components/root-navigator';
import { useDevtools } from './shared/hooks/devtools.hook';

const App = () => {
	useDevtools();

	return (
		<SafeAreaProvider>
			<RootNavigator />
		</SafeAreaProvider>
	);
};

export default App;
