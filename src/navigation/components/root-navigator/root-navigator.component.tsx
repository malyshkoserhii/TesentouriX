import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SCREEN_OPTIONS } from 'src/navigation/constants/screen-options';
import {
	RootStackParamList,
	NAVIGATION_KEYS,
} from 'src/navigation/types/navigation.type';
import {
	HomeScreen,
	LoginScreen,
	OnboardingFirstStepScreen,
	OnboardingSecondStepScreen,
	OnboardingThirdStepScreen,
	RegisterScreen,
} from 'src/screens';
import { NavContainer } from '../nav-container';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
	const screens = React.useMemo(() => {
		return (
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
					name={NAVIGATION_KEYS.HOME}
					component={HomeScreen}
					options={SCREEN_OPTIONS}
				/>
			</>
		);
	}, []);

	return (
		<NavContainer>
			<Stack.Navigator
				initialRouteName={NAVIGATION_KEYS.ONBOARDING_FIRST_STEP}
			>
				{screens}
			</Stack.Navigator>
		</NavContainer>
	);
};
