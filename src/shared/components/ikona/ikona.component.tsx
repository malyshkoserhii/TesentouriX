import * as React from 'react';
import {
	Image,
	ImageSourcePropType,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';

import { styles } from './ikona.styles';
import { IMAGES } from 'src/shared/constants/image-map.const';
import ArrowIcon from '../../../assets/icons/arrow.svg';
import { COLORS } from 'src/shared/themes';

type IkonaProps = {
	onIconPress: (image: ImageSourcePropType) => void;
};

export const Ikona: React.FunctionComponent<IkonaProps> = ({ onIconPress }) => {
	const [isOpen, setIsOpen] = React.useState(false);
	const [activeIdx, setActiveIdx] = React.useState(0);

	const images = React.useMemo(() => {
		return [IMAGES.fork, IMAGES.dish, IMAGES.book, IMAGES.search];
	}, []);

	const isActive = (idx: number) => {
		return idx === activeIdx;
	};

	const toggleOpen = () => setIsOpen((prev) => !prev);

	return (
		<TouchableOpacity style={styles.container} onPress={toggleOpen}>
			<View style={styles.ikonaHeader}>
				<Text style={styles.ikonaText}>Ikona</Text>
				<ArrowIcon
					style={isOpen ? styles.arrowUp : styles.arrowDown}
					stroke={COLORS.coolGrey}
				/>
			</View>
			{isOpen && (
				<View style={styles.images}>
					{images?.map((image, idx) => {
						return (
							<TouchableOpacity
								style={[
									styles.iconWrapper,
									isActive(idx) && styles.activeBg,
								]}
								onPress={() => {
									setActiveIdx(idx);
									// onIconPress(image);
								}}
							>
								<Image
									key={idx}
									source={image}
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
		</TouchableOpacity>
	);
};
