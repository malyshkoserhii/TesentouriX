import { useEffect } from 'react';
import { DevSettings, NativeModules } from 'react-native';

export const useDevtools = (): void => {
	useEffect(() => {
		if (__DEV__) {
			DevSettings.addMenuItem('Debugging', () => {
				NativeModules.DevSettings.setIsDebuggingRemotely(true);
			});
		}
		if (__DEV__) {
			DevSettings.addMenuItem('Stop Debugging', () => {
				NativeModules.DevSettings.setIsDebuggingRemotely(false);
			});
		}
	}, []);
};
