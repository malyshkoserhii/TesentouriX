import { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';

import { useAuthStateListener } from './auth-state-listener.hook';

export const useSplashScreen = (): void => {
	const { initializing } = useAuthStateListener();

	useEffect(() => {
		if (!initializing) {
			SplashScreen.hide();
		}
	}, [initializing]);
};
