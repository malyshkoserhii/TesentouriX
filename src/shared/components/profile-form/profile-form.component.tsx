import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Formik, FormikProps } from 'formik';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import auth from '@react-native-firebase/auth';
import * as yup from 'yup';

import { styles } from './profile-form.styles';
import { LayoutWithBg } from '../layout/layout.component';
import { Input } from '../input';
import { Button } from '../button/button.component';
import { Title } from '../title/title.component';
import { Avatar } from '../avatar/avatar.component';
import { useImagePicker, useUploadImage } from 'src/shared/hooks';
import { logout } from 'src/shared/api';

type ProfileFormProps = {
	onLogin: () => void;
	navigateToSuccess: (email: string) => void;
};

type ProfileFormValues = {
	name: string;
	surname: string;
	password: string;
	email: string;
};

const PASSWORD = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])((?=.*\W)|(?=.*_))^[^ ]+$/;

export const registrationFormSchema = yup.object().shape({
	name: yup
		.string()
		.max(20, 'Maksymalnie 20 znaków')
		.required('Pole obowiązkowe'),
	surname: yup
		.string()
		.max(20, 'Maksymalnie 20 znaków')
		.required('Pole obowiązkowe'),
	email: yup
		.string()
		.email('Niepoprawny email')
		.max(30, 'Maksymalnie 30 znaków')
		.required('Pole obowiązkowe'),
	password: yup
		.string()
		.min(8, 'Hasło musi mieć co najmniej 8 znaków')
		.matches(PASSWORD, 'Wpisz 1 dużą literę, 1 cyfrę lub 1 znak specjalny')
		.required('Pole obowiązkowe'),
});

export const ProfileForm: React.FunctionComponent<ProfileFormProps> = ({
	onLogin,
	navigateToSuccess,
}) => {
	const [loading, setLoading] = React.useState(false);

	const {
		localImage,
		pathToLocalImage,
		setLocalImage,
		setPathToLocalImage,
		onImageLibraryPress,
	} = useImagePicker();

	const { uploadImage } = useUploadImage();

	const formikRef = React.useRef<FormikProps<ProfileFormValues>>(null);

	const onSubmit = async (values: ProfileFormValues) => {
		try {
			setLoading(true);

			const data = await auth().createUserWithEmailAndPassword(
				values.email,
				values.password,
			);

			await data.user.sendEmailVerification();

			await data.user.updateProfile({
				displayName: `${values.name} ${values.surname}`.trim(),
			});

			if (pathToLocalImage) {
				const avatarUrl = await uploadImage(pathToLocalImage);

				await data.user.updateProfile({
					photoURL: avatarUrl,
				});
			}

			await logout();

			navigateToSuccess(values.email);

			formikRef.current?.resetForm();

			setLocalImage(undefined);
			setPathToLocalImage(undefined);
		} catch (error) {
			setLoading(false);
		} finally {
			setLoading(false);
		}
	};

	return (
		<LayoutWithBg>
			<Formik<ProfileFormValues>
				initialValues={{
					name: '',
					surname: '',
					password: '',
					email: '',
				}}
				onSubmit={onSubmit}
				validateOnMount={true}
				validationSchema={registrationFormSchema}
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

									<Avatar
										avatarUrl={localImage}
										onImageLibraryPress={
											onImageLibraryPress
										}
									/>

									<Input
										value={values.name}
										placeholder="Nazwa"
										onChange={handleChange('name')}
										onBlur={handleBlur('name')}
										error={errors.name}
										touched={touched.name}
									/>

									<Input
										value={values.surname}
										placeholder="Nazwisko"
										onChange={handleChange('surname')}
										onBlur={handleBlur('surname')}
										error={errors.surname}
										touched={touched.surname}
									/>

									<Input
										value={values.password}
										placeholder="Hasło"
										onChange={handleChange('password')}
										onBlur={handleBlur('password')}
										error={errors.password}
										touched={touched.password}
									/>

									<Input
										value={values.email}
										placeholder="Poczta"
										onChange={handleChange('email')}
										onBlur={handleBlur('email')}
										error={errors.email}
										touched={touched.email}
									/>
								</View>

								<View style={styles.btnWrapper}>
									<View style={styles.authSwitch}>
										<Text style={styles.authSwitchText}>
											Czy masz konto?
										</Text>
										<TouchableOpacity onPress={onLogin}>
											<Text
												style={[
													styles.authSwitchText,
													styles.authSwitchLogin,
												]}
											>
												Zaloguj sie
											</Text>
										</TouchableOpacity>
									</View>

									<Button
										text="Zapisz"
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
