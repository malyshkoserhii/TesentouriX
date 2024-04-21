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
import { BUDGET_TYPE } from 'src/shared/constants';
import { COLORS } from 'src/shared/themes';
import { ListEmpty } from '../list-empty/list-empty.component';

type BudgetListItemProps = {
	budget: Budget;
	onBudgetItem: (budget: Budget) => void;
};

const ListItem: React.FunctionComponent<BudgetListItemProps> = ({
	budget,
	onBudgetItem,
}) => {
	const renderText = () => {
		if (budget.type === BUDGET_TYPE.DOCHOD) {
			return `+$${budget.total}`;
		}
		return `-$${budget.total}`;
	};

	const onPress = () => onBudgetItem(budget);

	return (
		<TouchableOpacity style={styles.item} onPress={onPress}>
			<View style={styles.container}>
				<View style={styles.imgWrapper}>
					<Image source={budget.image.source} style={styles.img} />
				</View>
				<View style={styles.textWrapper}>
					<Text numberOfLines={1} style={styles.title}>
						{budget.name}
					</Text>
					<Text style={styles.date}>{budget.date}</Text>
				</View>
			</View>

			<View style={styles.sumWrapper}>
				<View style={styles.sumContainer}>
					<Text
						numberOfLines={1}
						style={[
							styles.sum,
							budget.type === BUDGET_TYPE.DOCHOD && styles.income,
							budget.type === BUDGET_TYPE.WYDATEK &&
								styles.spending,
						]}
					>
						{renderText()}
					</Text>
				</View>
				<ArrowIcon stroke={COLORS.eerieBlack} style={styles.arrow} />
			</View>
		</TouchableOpacity>
	);
};

const BudgetListItem = React.memo(ListItem);

type BudgetListProps = {
	budgets: Array<Budget>;
	emptyListText: string;
	onPlus: () => void;
	onBudgetItem: (budget: Budget) => void;
};

export const BudgetsList: React.FunctionComponent<BudgetListProps> = ({
	budgets,
	emptyListText,
	onPlus,
	onBudgetItem,
}) => {
	const renderItem: ListRenderItem<Budget> = React.useCallback(
		({ item }) => {
			return <BudgetListItem budget={item} onBudgetItem={onBudgetItem} />;
		},
		[budgets],
	);

	const keyExtractor = React.useCallback((item: Budget) => {
		return item.id;
	}, []);

	return (
		<>
			<FlatList
				data={budgets}
				renderItem={renderItem}
				keyExtractor={keyExtractor}
				contentContainerStyle={styles.contentContainer}
				ListEmptyComponent={
					<ListEmpty onPlus={onPlus} text={emptyListText} />
				}
			/>
		</>
	);
};
