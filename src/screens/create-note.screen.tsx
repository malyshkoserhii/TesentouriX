import * as React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import {
	RootStackParamList,
	NAVIGATION_KEYS,
} from 'src/navigation/types/navigation.type';
import { Header, Layout, LayoutWithBg } from 'src/shared/components';

type CreateNoteScreenProps = NativeStackScreenProps<
	RootStackParamList,
	NAVIGATION_KEYS.CREATE_NOTE
>;

export const CreateNoteScreen = ({ navigation }: CreateNoteScreenProps) => {
	const [isOpen, setIsOpen] = React.useState(false);

	const toggleWebview = () => setIsOpen((prev) => !prev);

	const navigateToProfile = () =>
		navigation.navigate(NAVIGATION_KEYS.PROFILE);

	const back = () => navigation.goBack();

	return (
		<LayoutWithBg>
			<Header onArrow={back} title="Uwagi" />
		</LayoutWithBg>
	);
};
