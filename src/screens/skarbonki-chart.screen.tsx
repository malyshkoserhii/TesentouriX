import * as React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import {
	NAVIGATION_KEYS,
	RootStackParamList,
} from 'src/navigation/types/navigation.type';
import { Chart, ChartItem } from 'src/shared/components';
import { BUDGET_TYPE } from 'src/shared/constants';
import { useAppStore } from 'src/store';
import { FlatList } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

type BudgetScreenProps = NativeStackScreenProps<
	RootStackParamList,
	NAVIGATION_KEYS.SKARBONKI_CHART
>;

export const SkarbonkiChartScreen: React.FunctionComponent<
	BudgetScreenProps
> = ({ navigation }) => {
	const [getFilteredBudgets] = useAppStore((state) => [
		state.getFilteredBudgets,
	]);

	const isFocused = useIsFocused();

	const [filteredBudgets] = useAppStore((state) => [state.filteredBudgets]);

	const onArrow = () => navigation.goBack();

	const onEdit = () =>
		navigation.navigate(NAVIGATION_KEYS.BUDGETS, {
			type: BUDGET_TYPE.SKARBONKI,
		});

	React.useEffect(() => {
		getFilteredBudgets(BUDGET_TYPE.SKARBONKI);
	}, [isFocused]);

	return <Chart onArrow={onArrow} onEdit={onEdit} />;
};
