import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SCREEN_OPTIONS } from 'src/navigation/constants/screen-options';
import {
	RootStackParamList,
	NAVIGATION_KEYS,
} from 'src/navigation/types/navigation.type';
import {
	BudgetScreen,
	BudgetsScreen,
	CreateBudgetScreen,
	CreateNoteScreen,
	HomeScreen,
	LoginScreen,
	NoteScreen,
	NotesScreen,
	OnboardingFirstStepScreen,
	OnboardingSecondStepScreen,
	OnboardingThirdStepScreen,
	ProfileScreen,
	RegisterScreen,
	RegisterSuccessScreen,
	SettingsScreen,
	SkarbonkiChartScreen,
} from 'src/screens';
import { NavContainer } from '../nav-container';
import { useAppStore } from 'src/store';
import { STORAGE_KEYS } from 'src/shared/constants';
import { asyncStorage } from 'src/shared/services';

const Stack = createNativeStackNavigator<RootStackParamList>();

const onb = (
	<>
		<Stack.Screen
			name={NAVIGATION_KEYS.ONBOARDING_FIRST_STEP}
			component={OnboardingFirstStepScreen}
			options={SCREEN_OPTIONS}
		/>
		<Stack.Screen
			name={NAVIGATION_KEYS.ONBOARDING_SECOND_STEP}
			component={OnboardingSecondStepScreen}
			options={SCREEN_OPTIONS}
		/>
		<Stack.Screen
			name={NAVIGATION_KEYS.ONBOARDING_THIRD_STEP}
			component={OnboardingThirdStepScreen}
			options={SCREEN_OPTIONS}
		/>
		<Stack.Screen
			name={NAVIGATION_KEYS.LOGIN}
			component={LoginScreen}
			options={SCREEN_OPTIONS}
		/>
		<Stack.Screen
			name={NAVIGATION_KEYS.REGISTER}
			component={RegisterScreen}
			options={SCREEN_OPTIONS}
		/>
		<Stack.Screen
			name={NAVIGATION_KEYS.REGISTER_SUCCESS}
			component={RegisterSuccessScreen}
			options={SCREEN_OPTIONS}
		/>
	</>
);

const notOnb = (
	<>
		<Stack.Screen
			name={NAVIGATION_KEYS.LOGIN}
			component={LoginScreen}
			options={SCREEN_OPTIONS}
		/>
		<Stack.Screen
			name={NAVIGATION_KEYS.REGISTER}
			component={RegisterScreen}
			options={SCREEN_OPTIONS}
		/>
		<Stack.Screen
			name={NAVIGATION_KEYS.REGISTER_SUCCESS}
			component={RegisterSuccessScreen}
			options={SCREEN_OPTIONS}
		/>
	</>
);

const publicRoutes = (
	<>
		<Stack.Screen
			name={NAVIGATION_KEYS.ONBOARDING_FIRST_STEP}
			component={OnboardingFirstStepScreen}
			options={SCREEN_OPTIONS}
		/>
		<Stack.Screen
			name={NAVIGATION_KEYS.ONBOARDING_SECOND_STEP}
			component={OnboardingSecondStepScreen}
			options={SCREEN_OPTIONS}
		/>
		<Stack.Screen
			name={NAVIGATION_KEYS.ONBOARDING_THIRD_STEP}
			component={OnboardingThirdStepScreen}
			options={SCREEN_OPTIONS}
		/>
		<Stack.Screen
			name={NAVIGATION_KEYS.LOGIN}
			component={LoginScreen}
			options={SCREEN_OPTIONS}
		/>
		<Stack.Screen
			name={NAVIGATION_KEYS.REGISTER}
			component={RegisterScreen}
			options={SCREEN_OPTIONS}
		/>
		<Stack.Screen
			name={NAVIGATION_KEYS.REGISTER_SUCCESS}
			component={RegisterSuccessScreen}
			options={SCREEN_OPTIONS}
		/>
	</>
);

const privateRoutes = (
	<>
		<Stack.Screen
			name={NAVIGATION_KEYS.HOME}
			component={HomeScreen}
			options={SCREEN_OPTIONS}
		/>
		<Stack.Screen
			name={NAVIGATION_KEYS.SETTINGS}
			component={SettingsScreen}
			options={SCREEN_OPTIONS}
		/>
		<Stack.Screen
			name={NAVIGATION_KEYS.PROFILE}
			component={ProfileScreen}
			options={SCREEN_OPTIONS}
		/>
		<Stack.Screen
			name={NAVIGATION_KEYS.NOTES}
			component={NotesScreen}
			options={SCREEN_OPTIONS}
		/>
		<Stack.Screen
			name={NAVIGATION_KEYS.NOTE}
			component={NoteScreen}
			options={SCREEN_OPTIONS}
		/>
		<Stack.Screen
			name={NAVIGATION_KEYS.CREATE_NOTE}
			component={CreateNoteScreen}
			options={SCREEN_OPTIONS}
		/>
		<Stack.Screen
			name={NAVIGATION_KEYS.BUDGETS}
			component={BudgetsScreen}
			options={SCREEN_OPTIONS}
		/>
		<Stack.Screen
			name={NAVIGATION_KEYS.BUDGET}
			component={BudgetScreen}
			options={SCREEN_OPTIONS}
		/>
		<Stack.Screen
			name={NAVIGATION_KEYS.CREATE_BUDGET}
			component={CreateBudgetScreen}
			options={SCREEN_OPTIONS}
		/>
		<Stack.Screen
			name={NAVIGATION_KEYS.SKARBONKI_CHART}
			component={SkarbonkiChartScreen}
			options={SCREEN_OPTIONS}
		/>
	</>
);

export const RootNavigator = () => {
	const [user] = useAppStore((state) => [state.user]);

	const [onboarding, setOnboarding] = React.useState(false);

	React.useEffect(() => {
		const result = async () => {
			const onboarding = await isOnboarding();
			setOnboarding(onboarding);
		};

		result();
	}, []);

	const isOnboarding = async () => {
		const result = await asyncStorage.getData(STORAGE_KEYS.ONBOARDING);

		if (!result) {
			asyncStorage.setStringifiedData(STORAGE_KEYS.ONBOARDING, true);

			return false;
		}

		return true;
	};

	const screens = React.useMemo(() => {
		return user ? privateRoutes : onboarding ? notOnb : onb;
	}, [user, onboarding]);

	return (
		<NavContainer>
			<Stack.Navigator>{screens}</Stack.Navigator>
		</NavContainer>
	);
};
