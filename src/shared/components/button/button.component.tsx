import * as React from 'react';
import {
	ActivityIndicator,
	StyleProp,
	Text,
	TextStyle,
	TouchableOpacity,
	View,
	ViewStyle,
} from 'react-native';

import { styles } from './button.styles';

type ButtonProps = {
	onPress: () => void;
	text: string;
	icon?: React.ReactNode;
	loading?: boolean;
	disabled?: boolean;
	activityIndicatorSize?: number;
	extraContentWrapperStyles?: StyleProp<ViewStyle>;
	extraBtnStyles?: StyleProp<ViewStyle>;
	extraTextStyles?: StyleProp<TextStyle>;
	extraIconWrapperStyles?: StyleProp<ViewStyle>;
};

export const Button: React.FunctionComponent<ButtonProps> = ({
	onPress,
	text,
	icon,
	loading = false,
	disabled = false,
	activityIndicatorSize = 24,
	extraContentWrapperStyles = {},
	extraBtnStyles = {},
	extraTextStyles = {},
	extraIconWrapperStyles = {},
}) => {
	const isDisabled = React.useMemo(() => {
		return loading || disabled;
	}, [loading, disabled]);

	return (
		<TouchableOpacity
			onPress={onPress}
			disabled={isDisabled}
			style={[
				styles.button,
				isDisabled && styles.disabledBtn,
				extraBtnStyles,
			]}
		>
			{loading ? (
				<ActivityIndicator size={activityIndicatorSize} />
			) : (
				<View style={[styles.content, extraContentWrapperStyles]}>
					{icon && (
						<View
							style={[styles.iconWrapper, extraIconWrapperStyles]}
						>
							{icon}
						</View>
					)}
					<Text
						style={[
							styles.text,
							isDisabled && styles.disabledText,
							extraTextStyles,
						]}
					>
						{text}
					</Text>
				</View>
			)}
		</TouchableOpacity>
	);
};
