import * as React from 'react';
import { StyleProp, Text, TextStyle, View, ViewStyle } from 'react-native';

import Arrow from '../../../assets/icons/arrow.svg';

import { styles } from './header.styles';
import { PressarableIcon } from '..';
import { COLORS } from 'src/shared/themes';

type HeaderProps = {
	title: string;
	onArrow?: () => void;
	centralElement?: React.ReactNode;
	rightButton?: React.ReactNode;
	extraContainerStyles?: StyleProp<ViewStyle>;
	extraArrowStyles?: StyleProp<ViewStyle>;
	extraTitleBoxStyles?: StyleProp<ViewStyle>;
	extraTitleStyles?: StyleProp<TextStyle>;
	arrowColor?: string;
};

export const Header: React.FunctionComponent<HeaderProps> = ({
	onArrow,
	title,
	centralElement,
	rightButton,
	extraContainerStyles = {},
	extraArrowStyles = {},
	extraTitleStyles = {},
	arrowColor = COLORS.eerieBlack,
}) => {
	return (
		<View style={[styles.container, extraContainerStyles]}>
			{onArrow ? (
				<PressarableIcon
					icon={<Arrow stroke={arrowColor} strokeWidth={2} />}
					onPress={onArrow}
					extraStyles={[styles.pressarableIcon, extraArrowStyles]}
				/>
			) : (
				<View style={styles.dummy} />
			)}

			{centralElement ? (
				centralElement
			) : (
				<Text style={[styles.title, extraTitleStyles]}>{title}</Text>
			)}

			{rightButton ? (
				<View style={styles.rightButtonWrapper}>{rightButton}</View>
			) : (
				<View style={styles.dummy} />
			)}
		</View>
	);
};
