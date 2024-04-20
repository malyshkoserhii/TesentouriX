import * as React from 'react';
import { ImageSourcePropType, Text, View } from 'react-native';
import * as yup from 'yup';
import { FormikProps, Formik } from 'formik';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { DateData } from 'react-native-calendars';
import dayjs from 'dayjs';

import { styles } from './create-budget-form.styles';
import { useAppStore } from 'src/store';
import { Input } from '../input';
import { Button } from '../button/button.component';
import { IMAGES } from 'src/shared/constants/image-map.const';
import { Note } from 'src/shared/types';
import { Header } from '../header/header.component';
import { Ikona } from '../ikona/ikona.component';
import { DateInput } from '../date-input/date-input.component';

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
	const today = React.useCallback(() => {
		const date = dayjs();
		return dayjs(date).format('YYYY-MM-DD');
	}, []);

	const [date, setDate] = React.useState(today());

	const [image, setImage] = React.useState<ImageSourcePropType>(IMAGES.fork);
	const [isCalendar, setIsCalendar] = React.useState(false);

	const [addNote, updateNote] = useAppStore((state) => [
		state.addNote,
		state.updateNote,
	]);

	const formikRef = React.useRef<FormikProps<CreateBudgetFormValues>>(null);

	const onSubmit = async (values: CreateBudgetFormValues) => {};

	const onIconPress = (image: ImageSourcePropType) => {
		setImage(image);
	};

	const onDayPress = (day: DateData) => {
		setDate(day.dateString);
	};

	const onOpenCalendar = () => setIsCalendar(true);
	const onCloseCalendar = () => setIsCalendar(false);

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

									<DateInput
										date={date}
										isVisible={isCalendar}
										onDayPress={onDayPress}
										onOpenCalendar={onOpenCalendar}
										onCloseCalendar={onCloseCalendar}
									/>

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
