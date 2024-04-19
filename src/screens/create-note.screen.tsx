import * as React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import {
	RootStackParamList,
	NAVIGATION_KEYS,
} from 'src/navigation/types/navigation.type';
import { Header, LayoutWithBg } from 'src/shared/components';
import { CreateNoteForm } from 'src/shared/components/create-note-form/create-note-form.component';

type CreateNoteScreenProps = NativeStackScreenProps<
	RootStackParamList,
	NAVIGATION_KEYS.CREATE_NOTE
>;

export const CreateNoteScreen = ({
	navigation,
	route,
}: CreateNoteScreenProps) => {
	const note = React.useMemo(() => {
		return route?.params?.note;
	}, []);

	const navigateToNotes = () => navigation.navigate(NAVIGATION_KEYS.NOTES);

	const back = () => navigation.goBack();

	return (
		<LayoutWithBg>
			<Header onArrow={back} title="Uwagi" />
			<CreateNoteForm
				back={back}
				note={note}
				navigateToNotes={navigateToNotes}
			/>
		</LayoutWithBg>
	);
};
