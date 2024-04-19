import * as React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import {
	RootStackParamList,
	NAVIGATION_KEYS,
} from 'src/navigation/types/navigation.type';
import {
	Header,
	LayoutWithBg,
	Note,
	PressarableIcon,
} from 'src/shared/components';
import TrashBinIcon from '../assets/icons/trash_bin.svg';
import { useAppStore } from 'src/store';

type NoteScreenProps = NativeStackScreenProps<
	RootStackParamList,
	NAVIGATION_KEYS.NOTE
>;

export const NoteScreen = ({ navigation, route }: NoteScreenProps) => {
	const note = React.useMemo(() => {
		return route?.params?.note;
	}, []);

	const [removeNote] = useAppStore((state) => [state.removeNote]);

	const navigateToUpdate = () =>
		navigation.navigate(NAVIGATION_KEYS.CREATE_NOTE, { note });

	const back = () => navigation.goBack();

	const onRemove = () => {
		removeNote(note?.id);
		back();
	};

	return (
		<LayoutWithBg>
			<Header
				onArrow={back}
				title="Uwagi"
				rightButton={
					<PressarableIcon
						icon={<TrashBinIcon />}
						onPress={onRemove}
					/>
				}
				extraContainerStyles={{ marginBottom: 0 }}
			/>
			<Note note={note} navigateToUpdate={navigateToUpdate} />
		</LayoutWithBg>
	);
};
