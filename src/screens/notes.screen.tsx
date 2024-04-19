import * as React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import {
	RootStackParamList,
	NAVIGATION_KEYS,
} from 'src/navigation/types/navigation.type';
import {
	Header,
	LayoutWithBg,
	NotesList,
	PressarableIcon,
} from 'src/shared/components';
import { Note } from 'src/shared/types';
import PlusIcon from '../assets/icons/plus.svg';
import { COLORS } from 'src/shared/themes';
import { useAppStore } from 'src/store';

type NotesScreenProps = NativeStackScreenProps<
	RootStackParamList,
	NAVIGATION_KEYS.NOTES
>;

export const NotesScreen = ({ navigation }: NotesScreenProps) => {
	const [notes, getAllNotes] = useAppStore((state) => [
		state.notes,
		state.getAllNotes,
	]);

	React.useEffect(() => {
		getAllNotes();
	}, []);

	const navigateToNote = (note: Note) =>
		navigation.navigate(NAVIGATION_KEYS.NOTE, { note });

	const navigateToCreateNote = () =>
		navigation.navigate(NAVIGATION_KEYS.CREATE_NOTE, {});

	const back = () => navigation.goBack();

	return (
		<LayoutWithBg>
			<Header
				onArrow={back}
				title="Uwagi"
				rightButton={
					notes.length > 0 ? (
						<PressarableIcon
							icon={
								<PlusIcon
									stroke={COLORS.eerieBlack}
									strokeWidth={2}
								/>
							}
							onPress={navigateToCreateNote}
						/>
					) : null
				}
				extraContainerStyles={{ marginBottom: 0 }}
			/>
			<NotesList
				notes={notes}
				onNote={navigateToNote}
				onPlus={navigateToCreateNote}
			/>
		</LayoutWithBg>
	);
};
