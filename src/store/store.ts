import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { createWithEqualityFn } from 'zustand/traditional';
import { shallow } from 'zustand/shallow';
import { Note } from 'src/shared/types';
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
	removeNote: (noteId: string) => void;
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
		removeNote: (noteId: string) =>
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
	}),
	shallow,
);
