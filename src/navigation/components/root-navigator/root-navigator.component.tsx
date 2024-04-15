import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SCREEN_OPTIONS } from 'src/navigation/constants/screen-options';
import {
	RootStackParamList,
	NAVIGATION_KEYS,
} from 'src/navigation/types/navigation.type';
import { HomeScreen } from 'src/screens';
import { NavContainer } from '../nav-container';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
	const screens = React.useMemo(() => {
		return (
			<>
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
			<Stack.Navigator initialRouteName={NAVIGATION_KEYS.HOME}>
				{screens}
			</Stack.Navigator>
		</NavContainer>
	);
};
