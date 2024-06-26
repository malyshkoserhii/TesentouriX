import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { createWithEqualityFn } from 'zustand/traditional';
import { shallow } from 'zustand/shallow';

import { Budget, BudgetType, Note } from 'src/shared/types';
import { BUDGET_TYPE, STORAGE_KEYS } from 'src/shared/constants';
import { asyncStorage } from 'src/shared/services';

export type UserData = {
	data: FirebaseAuthTypes.User | null;
};

type UseAppStore = {
	user: FirebaseAuthTypes.User | null;
	setUser: (user: FirebaseAuthTypes.User | null) => void;
	notes: Array<Note>;
	getAllNotes: () => Promise<void>;
	addNote: (note: Note) => void;
	updateNote: (note: Note) => void;
	removeNote: (noteId: string | undefined) => void;
	budgets: Array<Budget>;
	filteredBudgets: Array<Budget>;
	getAllBudgets: () => Promise<void>;
	getFilteredBudgets: (budgetType: BudgetType) => Promise<void>;
	addBudget: (budget: Budget) => void;
	updateBudget: (budget: Budget) => void;
	removeBudget: (budgetId: string | undefined) => void;
	dochod: Array<Budget>;
	getDochod: () => Promise<void>;
	wydatki: Array<Budget>;
	getWydatki: () => Promise<void>;
	skarbonki: Array<Budget>;
	getSkarbonki: () => Promise<void>;
	saldo: {
		dochod: number;
		wydatki: number;
		saldo: number;
	};
	countSaldo: () => void;
};

export const useAppStore = createWithEqualityFn<UseAppStore>(
	(set, get) => ({
		user: null,
		setUser: (user: FirebaseAuthTypes.User | null) =>
			set(() => {
				return {
					user,
				};
			}),
		notes: [],
		getAllNotes: async () => {
			const parsedNotes = await asyncStorage.getParsedData<Array<Note>>(
				STORAGE_KEYS.NOTES,
			);
			set({ notes: parsedNotes ?? [] });
		},
		addNote: (note: Note) =>
			set(() => {
				const notes = get().notes;
				const updatedNotes = [...notes, note];
				asyncStorage.setStringifiedData<Array<Note>>(
					STORAGE_KEYS.NOTES,
					updatedNotes,
				);
				return {
					notes: updatedNotes,
				};
			}),
		updateNote: (note: Note) =>
			set(() => {
				const notes = get().notes;
				const updatedNotes = notes.map((el) =>
					note.id === el.id ? note : el,
				);
				asyncStorage.setStringifiedData<Array<Note>>(
					STORAGE_KEYS.NOTES,
					updatedNotes,
				);
				return {
					notes: updatedNotes,
				};
			}),
		removeNote: (noteId: string | undefined) =>
			set(() => {
				const notes = get().notes;
				const updatedNotes = notes.filter((note) => note.id !== noteId);
				asyncStorage.setStringifiedData<Array<Note>>(
					STORAGE_KEYS.NOTES,
					updatedNotes,
				);
				return {
					notes: updatedNotes,
				};
			}),
		budgets: [],
		filteredBudgets: [],
		getAllBudgets: async () => {
			const parsedBudgets = await asyncStorage.getParsedData<
				Array<Budget>
			>(STORAGE_KEYS.BUDGETS);

			set({ budgets: parsedBudgets ?? [] });
		},
		getFilteredBudgets: async (budgetType: BudgetType) => {
			const budgets = get().budgets;
			const filteredBudgets = budgets?.filter(
				(budget) => budget?.type === budgetType,
			);

			set({ filteredBudgets: filteredBudgets ?? [] });
		},
		addBudget: (budget: Budget) =>
			set(() => {
				const budgets = get().budgets;
				const updatedBudgets = [...budgets, budget];
				asyncStorage.setStringifiedData<Array<Budget>>(
					STORAGE_KEYS.BUDGETS,
					updatedBudgets,
				);

				return {
					budgets: updatedBudgets,
				};
			}),
		updateBudget: (budget: Budget) =>
			set(() => {
				const budgets = get().budgets;
				const updatedBudgets = budgets.map((el) =>
					budget.id === el.id ? budget : el,
				);
				asyncStorage.setStringifiedData<Array<Budget>>(
					STORAGE_KEYS.BUDGETS,
					updatedBudgets,
				);
				return {
					budgets: updatedBudgets,
				};
			}),
		removeBudget: (budgetId: string | undefined) =>
			set(() => {
				const budgets = get().budgets;
				const updatedBudgets = budgets.filter(
					(budget) => budget.id !== budgetId,
				);
				asyncStorage.setStringifiedData<Array<Budget>>(
					STORAGE_KEYS.BUDGETS,
					updatedBudgets,
				);
				return {
					budgets: updatedBudgets,
				};
			}),
		dochod: [],
		getDochod: async () => {
			const budgets = get().budgets;
			const filteredBudgets = budgets?.filter(
				(budget) => budget?.type === BUDGET_TYPE.DOCHOD,
			);

			set({ dochod: filteredBudgets ?? [] });
		},
		wydatki: [],
		getWydatki: async () => {
			const budgets = get().budgets;
			const filteredBudgets = budgets?.filter(
				(budget) => budget?.type === BUDGET_TYPE.WYDATEK,
			);

			set({ wydatki: filteredBudgets ?? [] });
		},
		skarbonki: [],
		getSkarbonki: async () => {
			const budgets = get().budgets;
			const filteredBudgets = budgets?.filter(
				(budget) => budget?.type === BUDGET_TYPE.SKARBONKI,
			);

			set({ skarbonki: filteredBudgets ?? [] });
		},
		saldo: {
			dochod: 0,
			wydatki: 0,
			saldo: 0,
		},
		countSaldo: () =>
			set(() => {
				const budgets = get().budgets;

				const allIncomes = budgets
					?.filter((el) => el.type === BUDGET_TYPE.DOCHOD)
					.map((el) => el?.total);
				const allSpendings = budgets
					?.filter((el) => el.type === BUDGET_TYPE.WYDATEK)
					.map((el) => el?.total);

				const dochod = allIncomes.reduce((acc, el) => {
					return acc + Number(el);
				}, 0);

				const wydatki = allSpendings.reduce((acc, el) => {
					return acc + Number(el);
				}, 0);

				const saldo = dochod - wydatki;

				return {
					saldo: {
						dochod,
						wydatki,
						saldo: Number(saldo.toFixed(2)),
					},
				};
			}),
	}),
	shallow,
);
