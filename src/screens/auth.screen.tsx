import * as React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import {
	NAVIGATION_KEYS,
	RootStackParamList,
} from 'src/navigation/types/navigation.type';
import {
	LoginForm,
	RegisterSuccess,
	RegisterForm,
} from 'src/shared/components';

type RegisterScreenProps = NativeStackScreenProps<
	RootStackParamList,
	NAVIGATION_KEYS.REGISTER
>;

export const RegisterScreen: React.FunctionComponent<RegisterScreenProps> = ({
	navigation,
}) => {
	const navigateToLogin = () => navigation.navigate(NAVIGATION_KEYS.LOGIN);
	const navigateToSuccess = (email: string) =>
		navigation.navigate(NAVIGATION_KEYS.REGISTER_SUCCESS, { email });

	return (
		<RegisterForm
			onLogin={navigateToLogin}
			navigateToSuccess={navigateToSuccess}
		/>
	);
};

type RegisterSuccessScreenProps = NativeStackScreenProps<
	RootStackParamList,
	NAVIGATION_KEYS.REGISTER_SUCCESS
>;

export const RegisterSuccessScreen = ({
	navigation,
	route,
}: RegisterSuccessScreenProps) => {
	const email = React.useMemo(() => {
		return route?.params?.email;
	}, [route?.params]);

	const navigateToLogin = () => navigation.navigate(NAVIGATION_KEYS.LOGIN);

	return <RegisterSuccess navigateToLogin={navigateToLogin} email={email} />;
};

type LoginScreenProps = NativeStackScreenProps<
	RootStackParamList,
	NAVIGATION_KEYS.LOGIN
>;

export const LoginScreen = ({ navigation }: LoginScreenProps) => {
	const navigateToRegister = () =>
		navigation.navigate(NAVIGATION_KEYS.REGISTER);

	return <LoginForm onRegister={navigateToRegister} />;
};
