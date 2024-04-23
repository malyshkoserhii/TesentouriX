import * as React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { styles } from './ikona.styles';
import { IMAGES } from 'src/shared/constants/image-map.const';
import ArrowIcon from '../../../assets/icons/arrow.svg';
import { COLORS } from 'src/shared/themes';
import { BudgetType, ImageData } from 'src/shared/types';
import { BUDGET_TYPE } from 'src/shared/constants';

type IkonaProps = {
	initialImage: ImageData;
	onIconPress: (image: ImageData) => void;
	budgetType: BudgetType;
};

export const Ikona: React.FunctionComponent<IkonaProps> = ({
	onIconPress,
	initialImage,
	budgetType,
}) => {
	const [isOpen, setIsOpen] = React.useState(false);
	const [activeIdx, setActiveIdx] = React.useState(initialImage?.index);

	const images = React.useMemo(() => {
		return [
			{ chartColor: COLORS.carmineRed, source: IMAGES.fork },
			{ chartColor: COLORS.philippineGreen, source: IMAGES.dish },
			{ chartColor: COLORS.gunmetal, source: IMAGES.book },
			{ chartColor: COLORS.azure, source: IMAGES.search },
			{ chartColor: COLORS.smokyBlack, source: IMAGES.coffee },
		];
	}, []);

	const isActive = (idx: number) => {
		return idx === activeIdx;
	};

	const toggleOpen = () => setIsOpen((prev) => !prev);

	const setBgColor = React.useCallback(
		(budgetType: BudgetType) => {
			const bgColor = {
				[BUDGET_TYPE.DOCHOD]: COLORS.philippineGreen,
				[BUDGET_TYPE.SKARBONKI]: COLORS.gunmetal,
				[BUDGET_TYPE.WYDATEK]: COLORS.carmineRed,
			};

			return { backgroundColor: bgColor[budgetType] };
		},
		[budgetType],
	);

	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.ikonaHeader} onPress={toggleOpen}>
				<Text style={styles.ikonaText}>Ikona</Text>
				<ArrowIcon
					style={isOpen ? styles.arrowUp : styles.arrowDown}
					stroke={COLORS.coolGrey}
				/>
			</TouchableOpacity>
			{isOpen && (
				<View style={styles.images}>
					{images?.map((image, idx) => {
						return (
							<TouchableOpacity
								key={idx}
								style={[
									styles.iconWrapper,
									isActive(idx) && setBgColor(budgetType),
								]}
								onPress={() => {
									setActiveIdx(idx);
									onIconPress({
										source: image?.source,
										index: idx,
										chartColor: image?.chartColor,
									});
								}}
							>
								<Image
									key={idx}
									source={image?.source}
									style={[
										styles.img,
										isActive(idx) && styles.activeTintColor,
									]}
								/>
							</TouchableOpacity>
						);
					})}
				</View>
			)}
		</View>
	);
};
