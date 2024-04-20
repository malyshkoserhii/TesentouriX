import * as React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import {
	NAVIGATION_KEYS,
	RootStackParamList,
} from 'src/navigation/types/navigation.type';
import { CreateBudgetForm, Layout, RegisterForm } from 'src/shared/components';
import { COLORS } from 'src/shared/themes';

type CreateBudgetScreenProps = NativeStackScreenProps<
	RootStackParamList,
	NAVIGATION_KEYS.CREATE_BUDGET
>;

export const CreateBudgetScreen: React.FunctionComponent<
	CreateBudgetScreenProps
> = ({ navigation, route }) => {
	const budgetType = React.useMemo(() => {
		return route?.params?.type;
	}, []);

	console.log('budgetType: ', budgetType);

	const navigateToLogin = () => navigation.navigate(NAVIGATION_KEYS.LOGIN);
	const navigateToSuccess = (email: string) =>
		navigation.navigate(NAVIGATION_KEYS.REGISTER_SUCCESS, { email });

	return (
		<Layout backgroundColor={COLORS.carmineRed}>
			<CreateBudgetForm
				back={function (): void {
					throw new Error('Function not implemented.');
				}}
				note={undefined}
				navigateToNotes={function (): void {
					throw new Error('Function not implemented.');
				}}
			/>
		</Layout>
	);
};
