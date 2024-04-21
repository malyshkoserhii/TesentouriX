import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as React from 'react';

import { View } from 'react-native';
import {
	RootStackParamList,
	NAVIGATION_KEYS,
} from 'src/navigation/types/navigation.type';
import { logout } from 'src/shared/api';
import { Button, HomePageTop, PageContainer } from 'src/shared/components';
import { BUDGET_TYPE } from 'src/shared/constants';

type HomeScreenProps = NativeStackScreenProps<
	RootStackParamList,
	NAVIGATION_KEYS.HOME
>;

export const HomeScreen = ({ navigation }: HomeScreenProps) => {
	const navigateToSettings = () =>
		navigation.navigate(NAVIGATION_KEYS.SETTINGS);

	const navigateToNotes = () => navigation.navigate(NAVIGATION_KEYS.NOTES);
	const navigateToDochod = () =>
		navigation.navigate(NAVIGATION_KEYS.BUDGETS, {
			type: BUDGET_TYPE.DOCHOD,
		});
	const navigateToSkarbonki = () =>
		navigation.navigate(NAVIGATION_KEYS.BUDGETS, {
			type: BUDGET_TYPE.SKARBONKI,
		});
	const navigateToWydatek = () =>
		navigation.navigate(NAVIGATION_KEYS.BUDGETS, {
			type: BUDGET_TYPE.WYDATEK,
		});

	return (
		<PageContainer>
			<HomePageTop
				navigateToSettings={navigateToSettings}
				navigateToNotes={navigateToNotes}
			/>
			<Button
				text="Dochod"
				onPress={navigateToDochod}
				extraBtnStyles={{ marginBottom: 10 }}
			/>
			<Button
				text="Skarbonki"
				onPress={navigateToSkarbonki}
				extraBtnStyles={{ marginBottom: 10 }}
			/>
			<Button text="Wydatek" onPress={navigateToWydatek} />
		</PageContainer>
	);
};
