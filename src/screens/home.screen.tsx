import * as React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import {
	RootStackParamList,
	NAVIGATION_KEYS,
} from 'src/navigation/types/navigation.type';
import {
	HomePageTop,
	HomepageBottom,
	PageContainer,
} from 'src/shared/components';
import { BUDGET_TYPE } from 'src/shared/constants';
import { Budget, BudgetType } from 'src/shared/types';
import { useAppStore } from 'src/store';

type HomeScreenProps = NativeStackScreenProps<
	RootStackParamList,
	NAVIGATION_KEYS.HOME
>;

export const HomeScreen = ({ navigation }: HomeScreenProps) => {
	const [getAllBudgets] = useAppStore((state) => [state.getAllBudgets]);

	React.useEffect(() => {
		getAllBudgets();
	}, []);

	const navigateToSettings = () =>
		navigation.navigate(NAVIGATION_KEYS.SETTINGS);

	const navigateToNotes = () => navigation.navigate(NAVIGATION_KEYS.NOTES);

	const navigateToDochod = () =>
		navigation.navigate(NAVIGATION_KEYS.BUDGETS, {
			type: BUDGET_TYPE.DOCHOD,
		});
	const navigateToSkarbonki = () =>
		navigation.navigate(NAVIGATION_KEYS.BUDGETS, {
			type: BUDGET_TYPE.SKARBONKI,
		});
	const navigateToWydatki = () =>
		navigation.navigate(NAVIGATION_KEYS.BUDGETS, {
			type: BUDGET_TYPE.WYDATEK,
		});

	const navigateToCreateBudget = (
		budgetType: BudgetType,
		budget?: Budget | undefined,
	) => {
		navigation.navigate(NAVIGATION_KEYS.CREATE_BUDGET, {
			type: budgetType,
			budget,
		});
	};

	const createDochod = () => navigateToCreateBudget(BUDGET_TYPE.DOCHOD);
	const createWydatki = () => navigateToCreateBudget(BUDGET_TYPE.WYDATEK);
	const createSkarbonki = () => navigateToCreateBudget(BUDGET_TYPE.SKARBONKI);

	const editItem = (item: Budget) => {
		navigateToCreateBudget(item?.type, item);
	};

	return (
		<PageContainer>
			<HomePageTop
				navigateToSettings={navigateToSettings}
				navigateToNotes={navigateToNotes}
			/>

			<HomepageBottom
				navigateToDochod={navigateToDochod}
				navigateToSkarbonki={navigateToSkarbonki}
				navigateToWydatki={navigateToWydatki}
				createDochod={createDochod}
				createWydatki={createWydatki}
				createSkarbonki={createSkarbonki}
				editItem={editItem}
			/>
		</PageContainer>
	);
};
