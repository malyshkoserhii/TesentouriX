import { StyleSheet } from 'react-native';
import { EdgeInsets } from 'react-native-safe-area-context';
import { COLORS } from 'src/shared/themes';

export const containerStyles = (insets: EdgeInsets, backgroundColor?: string) =>
	StyleSheet.create({
		safeArea: {
			flex: 1,
			backgroundColor: backgroundColor,
			paddingTop: insets.top,
			paddingLeft: insets.left,
			paddingRight: insets.right,
		},
		contentContainer: {
			flex: 1,
			backgroundColor: COLORS.gunmetal,
		},
		bgImg: {
			flex: 1,
		},
	});
