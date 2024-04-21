import { BUDGET_TYPE } from '../constants';
import { COLORS } from '../themes';
import { BudgetType } from '../types';

type DefineProps = {
	navigate: () => void;
};

type DefinePropsReturn = {
	[key: string]: {
		emptyListText: string;
		onPlus: () => void;
		backgroundColor: string;
		budgetListTitle: string;
		createBudgetTitle: string;
		editBudgetTitle: string;
		saveButtonText: string;
		editButtonText: string;
	};
};

export const defineProps = ({ navigate }: DefineProps): DefinePropsReturn => {
	const props: DefinePropsReturn = {
		[BUDGET_TYPE.DOCHOD]: {
			emptyListText: 'Dodaj swój pierwszy dochód',
			onPlus: navigate,
			backgroundColor: COLORS.philippineGreen,
			budgetListTitle: 'Dochod',
			createBudgetTitle: 'Nowy Dochód',
			editBudgetTitle: 'Edytuj Dochód',
			saveButtonText: 'Dodaj dochód +',
			editButtonText: 'Zapisz zmiany',
		},
		[BUDGET_TYPE.WYDATEK]: {
			emptyListText: 'Dodaj swój pierwszy wydatek',
			onPlus: navigate,
			backgroundColor: COLORS.carmineRed,
			budgetListTitle: 'Wydatki',
			createBudgetTitle: 'Nowe Wydatki',
			editBudgetTitle: 'Edytuj Wydatek',
			saveButtonText: 'Dodaj nowy wydatek +',
			editButtonText: 'Zapisz zmiany',
		},
		[BUDGET_TYPE.SKARBONKI]: {
			emptyListText: 'Lista skarbonek jest pusta',
			onPlus: navigate,
			backgroundColor: COLORS.gunmetal,
			budgetListTitle: 'Skarbonki',
			createBudgetTitle: 'Nowe Skarbonki',
			editBudgetTitle: 'Edytuj Skarbonkę',
			saveButtonText: 'Dodaj nowy skarbonki +',
			editButtonText: 'Zapisz zmiany',
		},
	};

	return props;
};
