import * as React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import {
	RootStackParamList,
	NAVIGATION_KEYS,
} from 'src/navigation/types/navigation.type';
import { CustomWebview, Header, Layout } from 'src/shared/components';
import { SettingsList } from 'src/shared/components';

type SettingsScreenProps = NativeStackScreenProps<
	RootStackParamList,
	NAVIGATION_KEYS.SETTINGS
>;

export const SettingsScreen = ({ navigation }: SettingsScreenProps) => {
	const [isOpen, setIsOpen] = React.useState(false);

	const toggleWebview = () => setIsOpen((prev) => !prev);

	const navigateToProfile = () =>
		navigation.navigate(NAVIGATION_KEYS.PROFILE);

	const back = () => navigation.goBack();

	return (
		<Layout>
			<Header onArrow={back} title="Ustawienia" />
			<SettingsList
				navigateToProfile={navigateToProfile}
				toggleWebview={toggleWebview}
			/>
			<CustomWebview
				isWebViewOpened={isOpen}
				onClose={toggleWebview}
				termsLink="https://portal.termshub.io/9mn8ziobtw/privacy_policy/"
			/>
		</Layout>
	);
};
