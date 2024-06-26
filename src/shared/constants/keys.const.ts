import { BudgetType } from '../types';

export const STORAGE_KEYS = Object.freeze({
	NOTES: 'NOTES',
	BUDGETS: 'BUDGETS',
	ONBOARDING: 'ONBOARDING',
});

export const BUDGET_TYPE = {
	DOCHOD: BudgetType.DOCHOD,
	SKARBONKI: BudgetType.SKARBONKI,
	WYDATEK: BudgetType.WYDATEK,
};
