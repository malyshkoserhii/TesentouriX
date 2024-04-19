import * as React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import {
	NAVIGATION_KEYS,
	RootStackParamList,
} from 'src/navigation/types/navigation.type';
import { RegisterForm } from 'src/shared/components';
import { Text } from 'react-native';

type BudgetsScreenProps = NativeStackScreenProps<
	RootStackParamList,
	NAVIGATION_KEYS.BUDGETS
>;

export const BudgetsScreen: React.FunctionComponent<BudgetsScreenProps> = ({
	navigation,
	route,
}) => {
	const budgetType = React.useMemo(() => {
		return route?.params?.type;
	}, []);

	console.log('budgetType: ', budgetType);

	const navigateToLogin = () => navigation.navigate(NAVIGATION_KEYS.LOGIN);
	const navigateToSuccess = (email: string) =>
		navigation.navigate(NAVIGATION_KEYS.REGISTER_SUCCESS, { email });

	return <Text>BudgetsScreen</Text>;
};
