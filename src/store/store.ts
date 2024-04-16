import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { createWithEqualityFn } from 'zustand/traditional';
import { shallow } from 'zustand/shallow';

export type UserData = {
	data: FirebaseAuthTypes.User | null;
};

type UseAppStore = {
	user: FirebaseAuthTypes.User | null;
	setUser: (user: FirebaseAuthTypes.User | null) => void;
};

export const useAppStore = createWithEqualityFn<UseAppStore>(
	(set) => ({
		user: null,
		setUser: (user: FirebaseAuthTypes.User | null) =>
			set(() => {
				return {
					user,
				};
			}),
	}),
	shallow,
);
