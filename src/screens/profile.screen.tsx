import { NativeStackScreenProps } from '@react-navigation/native-stack';

import {
	RootStackParamList,
	NAVIGATION_KEYS,
} from 'src/navigation/types/navigation.type';
import { Header, Layout } from 'src/shared/components';

type SettingsScreenProps = NativeStackScreenProps<
	RootStackParamList,
	NAVIGATION_KEYS.PROFILE
>;

export const ProfileScreen = ({ navigation }: SettingsScreenProps) => {
	const back = () => navigation.goBack();

	return (
		<Layout>
			<Header onArrow={back} title="Profil" />
		</Layout>
	);
};
