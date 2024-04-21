import * as React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useIsFocused } from '@react-navigation/native';

import {
	NAVIGATION_KEYS,
	RootStackParamList,
} from 'src/navigation/types/navigation.type';
import {
	BudgetsList,
	Header,
	LayoutWithBg,
	PressarableIcon,
} from 'src/shared/components';
import PlusIcon from '../assets/icons/plus.svg';
import { COLORS } from 'src/shared/themes';
import { useAppStore } from 'src/store';
import { defineProps } from 'src/shared/utils';
import { Budget } from 'src/shared/types';

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
	}, [route?.params]);

	const [
		getAllBudgets,
		getFilteredBudgets,
		filteredBudgets,
		addBudget,
		updateBudget,
		removeBudget,
	] = useAppStore((state) => [
		state.getAllBudgets,
		state.getFilteredBudgets,
		state.filteredBudgets,
		state.addBudget,
		state.updateBudget,
		state.removeBudget,
	]);

	const isFocused = useIsFocused();

	React.useEffect(() => {
		getAllBudgets();
		getFilteredBudgets(budgetType);
	}, [addBudget, updateBudget, removeBudget, isFocused]);

	const back = () => navigation.goBack();

	const navigateToCreateBudget = () =>
		navigation.navigate(NAVIGATION_KEYS.CREATE_BUDGET, {
			type: budgetType,
		});

	const props = React.useCallback(() => {
		const componentProps = defineProps({
			navigate: navigateToCreateBudget,
		});

		return componentProps;
	}, [budgetType]);

	const onBudgetItem = (budget: Budget) => {
		navigation.navigate(NAVIGATION_KEYS.CREATE_BUDGET, {
			type: budgetType,
			budget,
		});
	};

	return (
		<LayoutWithBg>
			<Header
				title={props()[budgetType].budgetListTitle}
				onArrow={back}
				rightButton={
					filteredBudgets?.length > 0 ? (
						<PressarableIcon
							icon={
								<PlusIcon
									stroke={COLORS.eerieBlack}
									strokeWidth={2}
								/>
							}
							onPress={navigateToCreateBudget}
						/>
					) : null
				}
			/>
			<BudgetsList
				budgets={filteredBudgets}
				onPlus={navigateToCreateBudget}
				onBudgetItem={onBudgetItem}
				emptyListText={props()[budgetType].emptyListText}
			/>
		</LayoutWithBg>
	);
};
