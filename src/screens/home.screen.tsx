import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as React from 'react';

import { View } from 'react-native';
import {
	RootStackParamList,
	NAVIGATION_KEYS,
} from 'src/navigation/types/navigation.type';
import { logout } from 'src/shared/api';
import { Button, HomePageTop, PageContainer } from 'src/shared/components';

type HomeScreenProps = NativeStackScreenProps<
	RootStackParamList,
	NAVIGATION_KEYS.HOME
>;

export const HomeScreen = ({ navigation }: HomeScreenProps) => {
	const navigateToSettings = () =>
		navigation.navigate(NAVIGATION_KEYS.SETTINGS);

	return (
		<PageContainer>
			<HomePageTop navigateToSettings={navigateToSettings} />
			{/* <Button text="Logout" onPress={logout} /> */}
		</PageContainer>
	);
};
