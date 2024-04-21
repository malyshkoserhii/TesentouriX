import * as React from 'react';
import { Text, View } from 'react-native';
import * as yup from 'yup';
import { FormikProps, Formik } from 'formik';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { DateData } from 'react-native-calendars';
import dayjs from 'dayjs';

import { buttonBg, styles } from './create-budget-form.styles';
import { useAppStore } from 'src/store';
import { Input } from '../input';
import { Button } from '../button/button.component';
import { IMAGES } from 'src/shared/constants/image-map.const';
import { Ikona } from '../ikona/ikona.component';
import { DateInput } from '../date-input/date-input.component';
import { generateId } from 'src/shared/utils';
import { Budget, BudgetType, ImageData } from 'src/shared/types';

type CreateBudgetFormValues = {
	name: string;
	total: string;
};

type CreateBudgetFormProps = {
	back: () => void;
	budget: Budget | undefined;
	btnText: string;
	btnBgColor: string;
	budgetType: BudgetType;
};

export const createBudgetFormSchema = yup.object().shape({
	name: yup
		.string()
		.max(20, 'Maksymalnie 20 znaków')
		.required('Pole obowiązkowe'),
	total: yup
		.string()
		.matches(/^\d+$/, 'Tylko liczby całkowite')
		.max(20, 'Maksymalnie 20 znaków')
		.required('Pole obowiązkowe'),
});

export const CreateBudgetForm: React.FunctionComponent<
	CreateBudgetFormProps
> = ({ back, budget, btnText, btnBgColor, budgetType }) => {
	const today = React.useCallback(() => {
		const date = dayjs();
		return dayjs(date).format('YYYY-MM-DD');
	}, []);

	const [date, setDate] = React.useState(budget?.date ?? today());

	const [image, setImage] = React.useState<ImageData>(
		budget?.image ?? { source: IMAGES.fork, index: 0 },
	);
	const [isCalendar, setIsCalendar] = React.useState(false);

	const [addBudget, updateBudget] = useAppStore((state) => [
		state.addBudget,
		state.updateBudget,
	]);

	const formikRef = React.useRef<FormikProps<CreateBudgetFormValues>>(null);

	const onIconPress = (image: ImageData) => {
		setImage(image);
	};

	const onDayPress = (day: DateData) => {
		setDate(day.dateString);
	};

	const onOpenCalendar = () => setIsCalendar(true);
	const onCloseCalendar = () => setIsCalendar(false);

	const onSubmit = async (values: CreateBudgetFormValues) => {
		if (budget) {
			updateBudget({
				id: budget.id,
				name: values?.name,
				total: values?.total,
				image,
				date,
				type: budgetType,
			});
			back();
			return;
		}
		addBudget({
			id: generateId(),
			name: values?.name,
			total: values?.total,
			image,
			date,
			type: budgetType,
		});
		back();
	};

	return (
		<Formik<CreateBudgetFormValues>
			initialValues={{
				name: budget?.name ?? '',
				total: budget?.total ?? '',
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
											values?.total ? values.total : '00'
										}.00`}
									</Text>
								</View>

								<View style={styles.form}>
									<Input
										value={values.name}
										placeholder="Nazwa"
										onChange={handleChange('name')}
										onBlur={handleBlur('name')}
										error={errors.name}
										touched={touched.name}
									/>

									<Ikona
										onIconPress={onIconPress}
										initialImage={image}
									/>

									<DateInput
										date={date}
										isVisible={isCalendar}
										onDayPress={onDayPress}
										onOpenCalendar={onOpenCalendar}
										onCloseCalendar={onCloseCalendar}
									/>

									<Input
										value={values.total}
										placeholder="Kwota"
										onChange={handleChange('total')}
										onBlur={handleBlur('total')}
										error={errors.total}
										touched={touched.total}
									/>

									<Button
										text={btnText}
										onPress={handleSubmit}
										extraBtnStyles={[
											styles.button,
											buttonBg(btnBgColor).color,
										]}
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
