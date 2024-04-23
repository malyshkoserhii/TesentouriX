import * as React from 'react';
import { Dimensions, FlatList, ScrollView, Text, View } from 'react-native';
import { ProgressChart } from 'react-native-chart-kit';
//@ts-ignore
import ActivityRings from 'react-native-activity-rings';

import { dotStyles, styles } from './chart.styles';
import { useAppStore } from 'src/store';
import { Layout } from '../layout/layout.component';
import { Header } from '../header/header.component';
import { COLORS } from 'src/shared/themes';
import EditIcon from '../../../assets/icons/edit.svg';
import { PressarableIcon } from '../pressarable-icon/pressarable-icon.component';
import { Budget } from 'src/shared/types';

type ChartProps = {
	onArrow: () => void;
	onEdit: () => void;
};

type ChartData = {
	value: number;
	color: string;
};

export const Chart: React.FunctionComponent<ChartProps> = ({
	onArrow,
	onEdit,
}) => {
	const [filteredBudgets] = useAppStore((state) => [state.filteredBudgets]);

	const [data, setData] = React.useState<Array<ChartData>>([]);

	React.useEffect(() => {
		const chartData = filteredBudgets?.map((el) => {
			if (el?.bonus) {
				return { value: el?.bonus / 100, color: el?.image?.chartColor };
			}
			return { value: 0, color: COLORS.americanGreen };
		});

		setData(chartData);
	}, [filteredBudgets]);

	const activityConfig = {
		width: 228,
		height: 228,
		ringSize: 10,
	};

	return (
		<Layout>
			<Header
				onArrow={onArrow}
				title="Skarbonki"
				rightButton={
					<PressarableIcon icon={<EditIcon />} onPress={onEdit} />
				}
			/>

			<FlatList
				ListHeaderComponent={
					<View>
						<ActivityRings data={data} config={activityConfig} />
					</View>
				}
				data={filteredBudgets}
				renderItem={({ item }) => <ChartItem item={item} />}
				keyExtractor={(item) => item?.id}
				contentContainerStyle={styles.contentContainer}
			/>
		</Layout>
	);
};

type ChartItemProps = {
	item: Budget;
};

export const ChartItem: React.FunctionComponent<ChartItemProps> = ({
	item,
}) => {
	console.log('item', item);
	return (
		<View style={styles.item}>
			<View style={dotStyles(item?.image?.chartColor).dot} />
			<Text style={styles.name}>{item?.name}</Text>
			{item?.bonus && <Text style={styles.bonus}>{item?.bonus}%</Text>}
		</View>
	);
};
