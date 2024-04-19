import { Note } from 'src/shared/types';

export type RegisterSucceessParams = {
	email: string;
};

export type NoteParams = {
	note: Note;
};

export type CreateNoteParams = {
	note?: Note;
};
