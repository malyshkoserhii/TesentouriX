import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Formik, FormikProps } from 'formik';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import auth from '@react-native-firebase/auth';
import { ReactNativeFirebase } from '@react-native-firebase/app';

import { styles } from './login-form.styles';
import { LayoutWithBg } from '../layout/layout.component';
import { Input } from '../input';
import { Button } from '../button/button.component';
import { Title } from '../title/title.component';
import { useAppStore } from 'src/store';

type LoginFormFormProps = {
	onRegister: () => void;
};

type LoginFormValues = {
	password: string;
	email: string;
};

export const LoginForm: React.FunctionComponent<LoginFormFormProps> = ({
	onRegister,
}) => {
	const [loading, setLoading] = React.useState(false);

	const [setUser] = useAppStore((state) => [state.setUser]);

	const formikRef = React.useRef<FormikProps<LoginFormValues>>(null);

	const onSubmit = async (values: LoginFormValues) => {
		setLoading(true);

		await auth()
			.signInWithEmailAndPassword(values.email, values.password)
			.then((data) => {
				if (!data.user.emailVerified) {
					setLoading(false);

					return;
				}
				setUser(data?.user);
				setLoading(false);
			})
			.catch((error: ReactNativeFirebase.NativeFirebaseError) => {
				formikRef.current?.setFieldError(
					'password',
					error.nativeErrorMessage,
				);
				setLoading(false);
			});
	};

	return (
		<LayoutWithBg>
			<Formik<LoginFormValues>
				initialValues={{
					password: '',
					email: '',
				}}
				onSubmit={onSubmit}
				validateOnMount={true}
				innerRef={formikRef}
			>
				{({
					handleChange,
					handleBlur,
					handleSubmit,
					values,
					errors,
					touched,
				}) => {
					return (
						<KeyboardAwareScrollView
							showsVerticalScrollIndicator={false}
							contentContainerStyle={styles.contentContainer}
						>
							<View style={styles.pageWrapper}>
								<View style={styles.form}>
									<Title extraStyles={styles.title} />

									<Input
										value={values.email}
										placeholder="Poczta"
										onChange={handleChange('email')}
										onBlur={handleBlur('email')}
										error={errors.email}
										touched={touched.email}
									/>

									<Input
										value={values.password}
										placeholder="Hasło"
										onChange={handleChange('password')}
										onBlur={handleBlur('password')}
										error={errors.password}
										touched={touched.password}
									/>
								</View>

								<View style={styles.btnWrapper}>
									<View style={styles.authSwitch}>
										<Text style={styles.authSwitchText}>
											Nie masz konta?
										</Text>
										<TouchableOpacity onPress={onRegister}>
											<Text
												style={[
													styles.authSwitchText,
													styles.authSwitchLogin,
												]}
											>
												Zapisać się
											</Text>
										</TouchableOpacity>
									</View>

									<Button
										text="Zaloguj sie"
										onPress={handleSubmit}
										extraBtnStyles={styles.button}
										loading={loading}
									/>
								</View>
							</View>
						</KeyboardAwareScrollView>
					);
				}}
			</Formik>
		</LayoutWithBg>
	);
};
