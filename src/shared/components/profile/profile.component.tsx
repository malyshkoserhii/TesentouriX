import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Formik, FormikProps } from 'formik';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { firebase } from '@react-native-firebase/auth';
import * as yup from 'yup';

import { styles } from './profile.styles';
import { Input } from '../input';
import { Button } from '../button/button.component';
import { Avatar } from '../avatar/avatar.component';
import { useImagePicker, useUploadImage } from 'src/shared/hooks';
import { COLORS } from 'src/shared/themes';
import { Layout } from '../layout/layout.component';
import { Header } from '../header/header.component';
import { useAppStore } from 'src/store';
import { IMAGES } from 'src/shared/constants/image-map.const';
import { PressarableIcon } from '../pressarable-icon/pressarable-icon.component';
import ExitIcon from '../../../assets/icons/exit.svg';
import { logout } from 'src/shared/api';

type ProfileFormProps = {
	back: () => void;
};

type ProfileFormValues = {
	name: string;
	surname: string;
	email: string;
};

export const profileFormSchema = yup.object().shape({
	name: yup
		.string()
		.max(20, 'Maksymalnie 20 znaków')
		.required('Pole obowiązkowe'),
	surname: yup
		.string()
		.max(20, 'Maksymalnie 20 znaków')
		.required('Pole obowiązkowe'),
});

export const ProfileForm: React.FunctionComponent<ProfileFormProps> = ({
	back,
}) => {
	const [loading, setLoading] = React.useState(false);
	const [loadingDelete, setLoadingDelete] = React.useState(false);

	const [user, setUser] = useAppStore((state) => [state.user, state.setUser]);

	const { localImage, pathToLocalImage, onImageLibraryPress } =
		useImagePicker();

	const { uploadImage } = useUploadImage();

	const formikRef = React.useRef<FormikProps<ProfileFormValues>>(null);

	const deleteUser = async () => {
		try {
			setLoadingDelete(true);
			await user?.delete();
			setUser(null);

			//TODO remove localstorageData
		} catch (error) {
			setLoadingDelete(false);
		} finally {
			setLoadingDelete(false);
		}
	};

	const onSubmit = async (values: ProfileFormValues) => {
		try {
			setLoading(true);

			const displayName = `${values.name} ${values.surname}`.trim();

			await user?.updateProfile({
				displayName,
			});

			if (pathToLocalImage) {
				const avatarUrl = await uploadImage(pathToLocalImage);

				await user?.updateProfile({
					photoURL: avatarUrl,
				});
			}

			const currentUser = firebase.auth().currentUser;

			setUser(currentUser);
		} catch (error) {
			setLoading(false);
		} finally {
			setLoading(false);
		}
	};

	const name = React.useMemo(() => {
		return user?.displayName?.split(' ')?.[0];
	}, [user]);

	const surname = React.useMemo(() => {
		return user?.displayName?.split(' ')?.[1];
	}, [user]);

	return (
		<Layout backgroundColor={COLORS.brightGray}>
			<Header
				onArrow={back}
				title="Konto"
				extraContainerStyles={styles.headerContainer}
				rightButton={
					<PressarableIcon
						icon={
							<ExitIcon width={24} height={24} strokeWidth={2} />
						}
						onPress={logout}
					/>
				}
			/>
			<Formik<ProfileFormValues>
				initialValues={{
					name: name ?? '',
					surname: surname ?? '',
					email: user?.email ?? '',
				}}
				onSubmit={onSubmit}
				validateOnMount={true}
				validationSchema={profileFormSchema}
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
								<View>
									<Avatar
										avatarUrl={
											localImage ??
											user?.photoURL ??
											undefined
										}
										onImageLibraryPress={
											onImageLibraryPress
										}
										avatarBgImg={IMAGES.avatarBg}
										isAvatarMsg={false}
										extraAvatarStyles={styles.avatarWrapper}
										extraAvatarWrapperStyles={
											styles.avatarWrapper
										}
										username={user?.displayName ?? ''}
									/>

									<View style={styles.inputWrapper}>
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
											value={values.email}
											placeholder="Poczta"
											onChange={handleChange('email')}
											onBlur={handleBlur('email')}
											error={errors.email}
											touched={touched.email}
											editable={false}
										/>
									</View>
								</View>

								<View style={styles.btnWrapper}>
									<View style={styles.authSwitch}>
										<TouchableOpacity
											disabled={loadingDelete}
											onPress={deleteUser}
										>
											<Text
												style={styles.authSwitchLogin}
											>
												Usuń konto
											</Text>
										</TouchableOpacity>
									</View>

									<Button
										text="Zapisz zmiany"
										onPress={handleSubmit}
										extraBtnStyles={styles.button}
										loading={loading}
										disabled={loadingDelete}
									/>
								</View>
							</View>
						</KeyboardAwareScrollView>
					);
				}}
			</Formik>
		</Layout>
	);
};
