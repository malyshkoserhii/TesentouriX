import * as React from 'react';
import {
	FlatList,
	Image,
	ListRenderItem,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';

import { styles } from './budgets.styles';
import ArrowIcon from '../../../assets/icons/arrow.svg';
import { Budget } from 'src/shared/types';
import { IMAGES } from 'src/shared/constants/image-map.const';
import { BUDGET_TYPE } from 'src/shared/constants';
import { Header } from '../header/header.component';
import { COLORS } from 'src/shared/themes';

type BudgetListItemProps = {
	budget: Budget;
};

const ListItem: React.FunctionComponent<BudgetListItemProps> = ({ budget }) => {
	return (
		<TouchableOpacity style={styles.item}>
			<View style={styles.container}>
				<View style={styles.imgWrapper}>
					<Image source={budget.image} style={styles.img} />
				</View>
				<View style={styles.textWrapper}>
					<Text numberOfLines={1} style={styles.title}>
						{budget.title}
					</Text>
					<Text style={styles.date}>{budget.date}</Text>
				</View>
			</View>

			<View style={styles.sumWrapper}>
				<View style={styles.sumContainer}>
					<Text numberOfLines={1} style={styles.sum}>
						-${budget.sum}
					</Text>
				</View>
				<ArrowIcon stroke={COLORS.eerieBlack} style={styles.arrow} />
			</View>
		</TouchableOpacity>
	);
};

const BudgetListItem = React.memo(ListItem);

type BudgetListProps = {
	navigateToProfile: () => void;
	toggleWebview: () => void;
};

export const BudgetsList: React.FunctionComponent<BudgetListProps> = ({
	navigateToProfile,
	toggleWebview,
}) => {
	const budget: Array<Budget> = React.useMemo(() => {
		return [
			{
				id: '1',
				title: 'Nauka w szkole Le Cordon Bleu',
				date: '04-20-2024',
				sum: '100',
				image: IMAGES.book,
				type: BUDGET_TYPE.SKARBONKI,
				bonus: '23',
			},
			{
				id: '2',
				title: 'Nauka w szkole Le Cordon Bleu',
				date: '04-20-2024',
				sum: '200',
				image: IMAGES.book,
				type: BUDGET_TYPE.SKARBONKI,
				bonus: '14',
			},
			{
				id: '3',
				title: 'Nauka w szkole Le Cordon Bleu',
				date: '04-20-2024',
				sum: '300',
				image: IMAGES.book,
				type: BUDGET_TYPE.SKARBONKI,
				bonus: '65',
			},
		];
	}, []);

	const renderItem: ListRenderItem<Budget> = React.useCallback(
		({ item }) => {
			return <BudgetListItem budget={item} />;
		},
		[budget],
	);

	const keyExtractor = React.useCallback((item: Budget) => {
		return item.id;
	}, []);

	return (
		<>
			<Header title={'Wydatki'} onArrow={() => {}} />
			<FlatList
				data={budget}
				renderItem={renderItem}
				keyExtractor={keyExtractor}
				contentContainerStyle={styles.contentContainer}
			/>
		</>
	);
};
