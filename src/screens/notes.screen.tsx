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

const DESCRIPTION =
	'Aby zapisać się do Le Cordon Bleu, najpierw wybieram kurs i aplikuję przez internet. Następnie, po otrzymaniu i zaakceptowaniu oferty, dokonuję płatności. Kiedy płatność zostanie zaksięgowana, otrzymuję maila z potwierdzeniem zapisu. Jeśli kurs trwa dłużej niż sześć miesięcy, potrzebuję wizy typu Student Route, a na krótsze kursy - wizy typu Standard Visitor. Uczestnictwo w orientacji jest obowiązkowe dla wszystkich nowych studentów. Więcej informacji można znaleźć na stronie​ (Cordon Bleu)​.';

type NotesScreenProps = NativeStackScreenProps<
	RootStackParamList,
	NAVIGATION_KEYS.NOTES
>;

export const NotesScreen = ({ navigation }: NotesScreenProps) => {
	const [isOpen, setIsOpen] = React.useState(false);

	const toggleWebview = () => setIsOpen((prev) => !prev);

	const navigateToNote = (note: Note) =>
		navigation.navigate(NAVIGATION_KEYS.NOTE, { note });

	const navigateToCreateNote = () =>
		navigation.navigate(NAVIGATION_KEYS.CREATE_NOTE, {});

	const back = () => navigation.goBack();

	const NOTES: Array<Note> = React.useMemo(() => {
		return [
			{
				id: '1',
				title: 'Nauka w szkole Le Cordon Bleu',
				description: DESCRIPTION,
			},
			{
				id: '2',
				title: 'Nauka w szkole Le Cordon Bleu',
				description: DESCRIPTION,
			},
			{
				id: '3',
				title: 'Nauka w szkole Le Cordon Bleu',
				description: DESCRIPTION,
			},
		];
	}, []);

	return (
		<LayoutWithBg>
			<Header
				onArrow={back}
				title="Uwagi"
				rightButton={
					<PressarableIcon
						icon={
							<PlusIcon
								stroke={COLORS.eerieBlack}
								strokeWidth={2}
							/>
						}
						onPress={navigateToCreateNote}
					/>
				}
			/>
			<NotesList notes={NOTES} onNote={navigateToNote} />
		</LayoutWithBg>
	);
};
