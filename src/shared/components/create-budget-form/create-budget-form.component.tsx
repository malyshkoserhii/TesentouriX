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
import { BUDGET_TYPE } from 'src/shared/constants';
import { COLORS } from 'src/shared/themes';

type CreateBudgetFormValues = {
	name: string;
	total: string;
	deposit: string;
};

type CreateBudgetFormProps = {
	back: () => void;
	budget: Budget | undefined;
	btnText: string;
	btnBgColor: string;
	budgetType: BudgetType;
};

const REGEX = /^[0-9]*\.?[0-9]+$/;

export const createBudgetFormSchema = yup.object().shape({
	name: yup
		.string()
		.max(20, 'Maksymalnie 20 znaków')
		.required('Pole obowiązkowe'),
	total: yup
		.string()
		.matches(REGEX, 'Tylko numery')
		.max(20, 'Maksymalnie 20 znaków')
		.required('Pole obowiązkowe'),
	deposit: yup
		.string()
		.matches(REGEX, 'Tylko numery')
		.max(20, 'Maksymalnie 20 znaków'),
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
		budget?.image ?? {
			source: IMAGES.fork,
			index: 0,
			chartColor: COLORS.carmineRed,
		},
	);
	const [isCalendar, setIsCalendar] = React.useState(false);
	const [bonus, setBonus] = React.useState(budget?.bonus ?? 0);

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
				deposit: values?.deposit,
				bonus: budget.bonus,
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
			deposit: values.deposit,
			bonus,
		});
		back();
	};

	const initialSum = (value: string | undefined) => {
		if (!value) {
			return '00.00';
		}
		if (value?.includes('.')) {
			return value;
		}
		return `${value}.00`;
	};

	const getBonus = (total: string, deposit: string) => {
		setTimeout(() => {
			if (!total) {
				setBonus(0);
				return 0;
			}
			const totalNum = Number(total);
			const depositNum = Number(deposit);
			const result = (depositNum * 100) / totalNum;
			const rounded = Math.round(result * 100) / 100;
			if (isNaN(result)) {
				return 0;
			}
			setBonus(rounded);
		}, 4);
		return bonus;
	};

	return (
		<Formik<CreateBudgetFormValues>
			initialValues={{
				name: budget?.name ?? '',
				total: budget?.total ?? '',
				deposit: budget?.deposit ?? '0',
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
										${initialSum(values.total)}
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
										budgetType={budgetType}
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

									{budgetType === BUDGET_TYPE.SKARBONKI && (
										<Input
											value={values.deposit}
											placeholder="Depozyt początkowy"
											onChange={handleChange('deposit')}
											onBlur={handleBlur('deposit')}
											error={errors.deposit}
											touched={touched.deposit}
											isSkarbonki={true}
											bonus={getBonus(
												values?.total,
												values?.deposit,
											)}
										/>
									)}

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
