import { BudgetType } from '../types';

export const STORAGE_KEYS = Object.freeze({
	NOTES: 'NOTES',
	BUDGETS: 'BUDGETS',
});

export const BUDGET_TYPE = {
	DOCHOD: BudgetType.DOCHOD,
	SKARBONKI: BudgetType.SKARBONKI,
	WYDATEK: BudgetType.WYDATEK,
};
