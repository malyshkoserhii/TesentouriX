import * as React from 'react';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

import { useAppStore } from '../../store';

type PopulateUserState = (user: FirebaseAuthTypes.User | null) => void;

export const useAuthStateListener = () => {
	const [initializing, setInitializing] = React.useState(true);

	const [setUser] = useAppStore((state) => [state.setUser]);

	const authStateListener = (populateUserState: PopulateUserState) => {
		return auth().onAuthStateChanged(populateUserState);
	};

	const populateUserState = (user: FirebaseAuthTypes.User | null) => {
		if (user?.emailVerified || !user) {
			setUser(user);
		}

		if (initializing) setInitializing(false);
	};

	React.useEffect(() => {
		const subscriber = authStateListener(populateUserState);

		return subscriber;
	}, []);

	return {
		initializing,
	};
};
