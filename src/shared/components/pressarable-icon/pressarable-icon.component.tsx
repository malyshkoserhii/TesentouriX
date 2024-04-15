import * as React from 'react';
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native';

import { styles } from './pressasrable-icon.styles';

type PressarableIconProps = {
	icon: React.ReactNode;
	onPress: () => void;
	extraStyles?: StyleProp<ViewStyle>;
};

export const PressarableIcon: React.FunctionComponent<PressarableIconProps> = ({
	icon,
	onPress,
	extraStyles = {},
}) => {
	return (
		<TouchableOpacity
			style={[styles.container, extraStyles]}
			onPress={onPress}
		>
			{icon}
		</TouchableOpacity>
	);
};
