import * as React from 'react';
import {
	FlatList,
	Image,
	ListRenderItem,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';

import { styles } from './homepage-list.styles';
import { Budget, BudgetType } from 'src/shared/types';
import { BUDGET_TYPE } from 'src/shared/constants';
import { COLORS } from 'src/shared/themes';
import PlusIcon from '../../../assets/icons/plus.svg';

type HomepageListProps = {
	budgets: Array<Budget>;
	emptyListText: string;
	title: string;
	onPlus: () => void;
	onBudgetItem: (budget: Budget) => void;
	onDots: () => void;
	budgetType: BudgetType;
};

type BudgetListItemProps = {
	budget: Budget;
	onBudgetItem: (budget: Budget) => void;
	budgetType: BudgetType;
};

const ListItem: React.FunctionComponent<BudgetListItemProps> = ({
	budget,
	onBudgetItem,
	budgetType,
}) => {
	const renderText = () => {
		if (budget.type === BUDGET_TYPE.DOCHOD) {
			return `+$${budget?.total}`;
		}
		if (budget.type === BUDGET_TYPE.WYDATEK) {
			return `-$${budget?.total}`;
		}
		return `$${budget?.total}`;
	};

	const onPress = () => onBudgetItem(budget);

	const setBgColor = React.useCallback(
		(budgetType: BudgetType) => {
			const bgColor = {
				[BUDGET_TYPE.DOCHOD]: 'rgba(14, 132, 62, 0.1)',
				[BUDGET_TYPE.SKARBONKI]: COLORS.coolGrey,
				[BUDGET_TYPE.WYDATEK]: 'rgba(255, 0, 48, 0.1)',
			};

			return { backgroundColor: bgColor[budgetType] };
		},
		[budgetType],
	);

	const setTextColor = React.useCallback(
		(budgetType: BudgetType) => {
			const color = {
				[BUDGET_TYPE.DOCHOD]: COLORS.eerieBlack,
				[BUDGET_TYPE.SKARBONKI]: COLORS.white,
				[BUDGET_TYPE.WYDATEK]: COLORS.eerieBlack,
			};

			return { color: color[budgetType] };
		},
		[budgetType],
	);

	const setSumColor = React.useCallback(
		(budgetType: BudgetType) => {
			const color = {
				[BUDGET_TYPE.DOCHOD]: COLORS.philippineGreen,
				[BUDGET_TYPE.SKARBONKI]: COLORS.white,
				[BUDGET_TYPE.WYDATEK]: COLORS.carmineRed,
			};

			return { color: color[budgetType] };
		},
		[budgetType],
	);

	return (
		<TouchableOpacity
			style={[styles.item, setBgColor(budgetType)]}
			onPress={onPress}
		>
			<View>
				<View style={styles.imgWrapper}>
					<Image source={budget.image.source} style={styles.img} />
				</View>
				<View style={styles.textWrapper}>
					<Text
						numberOfLines={1}
						style={[styles.title, setTextColor(budgetType)]}
					>
						{budget?.name}
					</Text>
				</View>
			</View>

			<View style={styles.sumWrapper}>
				<View style={styles.sumContainer}>
					<Text
						numberOfLines={1}
						style={[styles.sum, setSumColor(budgetType)]}
					>
						{renderText()}
					</Text>
					{budget?.bonus ? (
						<View style={styles.bonusBlock}>
							<Text numberOfLines={1} style={styles.bonusText}>
								{budget?.bonus}%
							</Text>
						</View>
					) : null}
				</View>
			</View>
		</TouchableOpacity>
	);
};

const BudgetListItem = React.memo(ListItem);

export const HomepageList: React.FunctionComponent<HomepageListProps> = ({
	budgets,
	emptyListText,
	onPlus,
	onBudgetItem,
	title,
	onDots,
	budgetType,
}) => {
	const renderItem: ListRenderItem<Budget> = React.useCallback(
		({ item }) => {
			return (
				<BudgetListItem
					budget={item}
					onBudgetItem={onBudgetItem}
					budgetType={budgetType}
				/>
			);
		},
		[budgets],
	);

	const keyExtractor = React.useCallback((item: Budget) => {
		return item.id;
	}, []);

	return (
		<>
			<View style={styles.block}>
				<Text style={styles.blockTitle}>{title}</Text>
				<TouchableOpacity style={styles.dotsWrapper} onPress={onDots}>
					<View style={styles.dot} />
					<View style={styles.dot} />
					<View style={styles.dot} />
				</TouchableOpacity>
			</View>
			<FlatList
				data={budgets}
				renderItem={renderItem}
				keyExtractor={keyExtractor}
				horizontal={true}
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={styles.contentContainer}
				ListHeaderComponent={<ListHeader onPlus={onPlus} />}
				ListEmptyComponent={
					<Text style={styles.emptyText}>{emptyListText}</Text>
				}
			/>
		</>
	);
};

type ListHeaderProps = {
	onPlus: () => void;
};

const ListHeader: React.FunctionComponent<ListHeaderProps> = ({ onPlus }) => {
	return (
		<TouchableOpacity style={styles.headerContainer} onPress={onPlus}>
			<PlusIcon stroke={COLORS.white} strokeWidth={2} />
		</TouchableOpacity>
	);
};
