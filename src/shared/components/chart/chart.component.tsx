import * as React from 'react';
import { Dimensions, View } from 'react-native';
import { ProgressChart } from 'react-native-chart-kit';
//@ts-ignore
import ActivityRings from 'react-native-activity-rings';

import { dotStyles, styles } from './chart.styles';
import { useAppStore } from 'src/store';
import { BUDGET_TYPE } from 'src/shared/constants';
import { Layout } from '../layout/layout.component';
import { Header } from '../header/header.component';
import { COLORS } from 'src/shared/themes';
import EditIcon from '../../../assets/icons/edit.svg';
import { PressarableIcon } from '../pressarable-icon/pressarable-icon.component';
import { Text } from 'react-native-svg';

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
	console.log('filteredBudgets', filteredBudgets);

	const [data, setData] = React.useState<Array<ChartData>>([]);

	console.log(data);

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
			<View>
				<ActivityRings data={data} config={activityConfig} />
			</View>
			{filteredBudgets?.map((el) => {
				console.log(el.image.chartColor);
				return (
					<ChartItem
						name={el.name}
						dotColor={el.image?.chartColor}
						bonus={el.bonus}
					/>
				);
			})}
		</Layout>
	);
};

type ChartItemProps = {
	dotColor: string;
	name: string;
	bonus: number | undefined;
};

const ChartItem: React.FunctionComponent<ChartItemProps> = ({
	dotColor,
	bonus,
	name,
}) => {
	return (
		<View style={styles.item}>
			<View style={dotStyles(dotColor).dot} />
			<Text>{name}</Text>
			{bonus && <Text>{bonus}%</Text>}
		</View>
	);
};
