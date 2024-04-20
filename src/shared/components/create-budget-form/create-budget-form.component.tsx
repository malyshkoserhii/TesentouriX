import * as React from 'react';
import { ImageSourcePropType, Text, View } from 'react-native';
import * as yup from 'yup';
import { FormikProps, Formik } from 'formik';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { styles } from './create-budget-form.styles';
import { useAppStore } from 'src/store';
import { Input } from '../input';
import { Button } from '../button/button.component';
import { IMAGES } from 'src/shared/constants/image-map.const';
import { Note } from 'src/shared/types';
import { Header } from '../header/header.component';
import { Ikona } from '../ikona/ikona.component';

type CreateBudgetFormValues = {
	title: string;
	sum: string;
};

type CreateBudgetFormProps = {
	back: () => void;
	note: Note | undefined;
	navigateToNotes: () => void;
};

export const createBudgetFormSchema = yup.object().shape({
	title: yup
		.string()
		.max(20, 'Maksymalnie 20 znaków')
		.required('Pole obowiązkowe'),
	sum: yup
		.string()
		.matches(/^\d+$/, 'Tylko liczby całkowite')
		.max(20, 'Maksymalnie 20 znaków')
		.required('Pole obowiązkowe'),
});

export const CreateBudgetForm: React.FunctionComponent<
	CreateBudgetFormProps
> = ({ back, note, navigateToNotes }) => {
	const [image, setImage] = React.useState<ImageSourcePropType>(IMAGES.fork);

	const [addNote, updateNote] = useAppStore((state) => [
		state.addNote,
		state.updateNote,
	]);

	const formikRef = React.useRef<FormikProps<CreateBudgetFormValues>>(null);

	const onSubmit = async (values: CreateBudgetFormValues) => {};

	const onIconPress = (image: ImageSourcePropType) => {
		setImage(image);
	};

	return (
		<Formik<CreateBudgetFormValues>
			initialValues={{
				title: '',
				sum: '',
			}}
			onSubmit={onSubmit}
			validateOnMount={true}
			validationSchema={createBudgetFormSchema}
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
					<>
						<Header onArrow={() => {}} title="Nowe Wydatky" />
						<KeyboardAwareScrollView
							showsVerticalScrollIndicator={false}
							contentContainerStyle={styles.contentContainer}
						>
							<View style={styles.pageWrapper}>
								<View style={styles.kwota}>
									<Text style={styles.kwotaText}>Kwota</Text>
									<Text style={styles.kwotaTotal}>
										$
										{`${
											values?.sum ? values.sum : '00'
										}.00`}
									</Text>
								</View>

								<View style={styles.form}>
									<Input
										value={values.title}
										placeholder="Nazwa"
										onChange={handleChange('title')}
										onBlur={handleBlur('title')}
										error={errors.title}
										touched={touched.title}
									/>

									<Ikona onIconPress={onIconPress} />

									<Input
										value={values.sum}
										placeholder="Kwota"
										onChange={handleChange('sum')}
										onBlur={handleBlur('sum')}
										error={errors.sum}
										touched={touched.sum}
									/>

									<Button
										text="Dodaj nowy wydatek +"
										onPress={() => {}}
										extraBtnStyles={styles.button}
										extraTextStyles={styles.btnText}
									/>
								</View>
							</View>
						</KeyboardAwareScrollView>
					</>
				);
			}}
		</Formik>
	);
};
