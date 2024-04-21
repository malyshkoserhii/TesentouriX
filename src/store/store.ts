import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { createWithEqualityFn } from 'zustand/traditional';
import { shallow } from 'zustand/shallow';

import { Budget, BudgetType, Note } from 'src/shared/types';
import { STORAGE_KEYS } from 'src/shared/constants';
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
	}),
	shallow,
);
