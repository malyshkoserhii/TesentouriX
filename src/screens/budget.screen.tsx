import * as React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import {
	NAVIGATION_KEYS,
	RootStackParamList,
} from 'src/navigation/types/navigation.type';
import { Text } from 'react-native';

type BudgetScreenProps = NativeStackScreenProps<
	RootStackParamList,
	NAVIGATION_KEYS.BUDGET
>;

export const BudgetScreen: React.FunctionComponent<BudgetScreenProps> = ({
	navigation,
}) => {
	const navigateToLogin = () => navigation.navigate(NAVIGATION_KEYS.LOGIN);
	const navigateToSuccess = (email: string) =>
		navigation.navigate(NAVIGATION_KEYS.REGISTER_SUCCESS, { email });

	return <Text>BudgetScreen</Text>;
};
