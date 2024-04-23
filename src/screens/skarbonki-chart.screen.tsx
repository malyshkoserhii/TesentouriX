import * as React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import {
	NAVIGATION_KEYS,
	RootStackParamList,
} from 'src/navigation/types/navigation.type';
import { Text } from 'react-native';

type BudgetScreenProps = NativeStackScreenProps<
	RootStackParamList,
	NAVIGATION_KEYS.SKARBONKI_CHART
>;

export const SkarbonkiChartScreen: React.FunctionComponent<
	BudgetScreenProps
> = ({ navigation }) => {
	return <Text>BudgetScreen</Text>;
};
