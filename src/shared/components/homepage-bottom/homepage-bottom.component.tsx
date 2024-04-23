import * as React from 'react';
import { useAppStore } from 'src/store';

import { Budget } from 'src/shared/types';
import { HomepageList } from '../homepage-lists/homepage-list.component';
import { BUDGET_TYPE } from 'src/shared/constants';

type HomepageBottomProps = {
	navigateToDochod: () => void;
	navigateToSkarbonki: () => void;
	navigateToWydatki: () => void;
	createDochod: () => void;
	createWydatki: () => void;
	createSkarbonki: () => void;
	editItem: (item: Budget) => void;
};

export const HomepageBottom: React.FunctionComponent<HomepageBottomProps> = ({
	createDochod,
	createSkarbonki,
	createWydatki,
	editItem,
	navigateToDochod,
	navigateToSkarbonki,
	navigateToWydatki,
}) => {
	const [
		budgets,
		getDochod,
		getSkarbonki,
		getWydatki,
		dochod,
		wydatki,
		skarbonki,
	] = useAppStore((state) => [
		state.budgets,
		state.getDochod,
		state.getSkarbonki,
		state.getWydatki,
		state.dochod,
		state.wydatki,
		state.skarbonki,
	]);

	React.useEffect(() => {
		getDochod();
		getSkarbonki();
		getWydatki();
	}, [budgets]);

	return (
		<>
			<HomepageList
				budgets={skarbonki}
				emptyListText={'Na tej liście nie ma nic'}
				onPlus={createSkarbonki}
				onBudgetItem={editItem}
				title="Skarbonki"
				onDots={navigateToSkarbonki}
				budgetType={BUDGET_TYPE.SKARBONKI}
			/>
			<HomepageList
				budgets={wydatki}
				emptyListText={'Na tej liście nie ma nic'}
				onPlus={createWydatki}
				onBudgetItem={editItem}
				title="Wydatki"
				onDots={navigateToWydatki}
				budgetType={BUDGET_TYPE.WYDATEK}
			/>
			<HomepageList
				budgets={dochod}
				emptyListText={'Na tej liście nie ma nic'}
				onPlus={createDochod}
				onBudgetItem={editItem}
				title="Dochod"
				onDots={navigateToDochod}
				budgetType={BUDGET_TYPE.DOCHOD}
			/>
		</>
	);
};
