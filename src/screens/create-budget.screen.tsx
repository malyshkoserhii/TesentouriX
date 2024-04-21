import * as React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import {
	NAVIGATION_KEYS,
	RootStackParamList,
} from 'src/navigation/types/navigation.type';
import {
	CreateBudgetForm,
	Header,
	Layout,
	PressarableIcon,
} from 'src/shared/components';
import { COLORS, FONTS } from 'src/shared/themes';
import { defineProps } from 'src/shared/utils';
import TrashBinIcon from '../assets/icons/trash_bin.svg';
import { useAppStore } from 'src/store';

type CreateBudgetScreenProps = NativeStackScreenProps<
	RootStackParamList,
	NAVIGATION_KEYS.CREATE_BUDGET
>;

export const CreateBudgetScreen: React.FunctionComponent<
	CreateBudgetScreenProps
> = ({ navigation, route }) => {
	const [removeBudget] = useAppStore((state) => [state.removeBudget]);

	const budgetType = React.useMemo(() => {
		return route?.params?.type;
	}, []);

	const budget = React.useMemo(() => {
		return route?.params?.budget;
	}, [route?.params]);

	const back = () => navigation.goBack();

	const remove = () => {
		removeBudget(budget?.id);
		back();
	};

	const props = React.useCallback(() => {
		const componentProps = defineProps({
			navigate: () => {},
		});

		return componentProps;
	}, [budgetType]);

	const buttonText = React.useMemo(() => {
		return budget
			? props()[budgetType].editButtonText
			: props()[budgetType].saveButtonText;
	}, [budgetType, budget]);

	const headerTitle = React.useMemo(() => {
		return budget
			? props()[budgetType].editBudgetTitle
			: props()[budgetType].createBudgetTitle;
	}, [budgetType, budget]);

	return (
		<Layout backgroundColor={props()[budgetType].backgroundColor}>
			<Header
				onArrow={back}
				title={headerTitle}
				extraTitleStyles={{
					color: COLORS.white,
					fontFamily: FONTS.Lato.bold,
				}}
				arrowColor={COLORS.white}
				rightButton={
					<PressarableIcon
						icon={<TrashBinIcon fill={COLORS.white} />}
						onPress={remove}
					/>
				}
			/>
			<CreateBudgetForm
				back={back}
				budget={budget}
				budgetType={budgetType}
				btnBgColor={props()[budgetType].backgroundColor}
				btnText={buttonText}
			/>
		</Layout>
	);
};
