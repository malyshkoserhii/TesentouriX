import { StyleSheet } from 'react-native';
import { EdgeInsets } from 'react-native-safe-area-context';

export const containerStyles = (insets: EdgeInsets, backgroundColor?: string) =>
	StyleSheet.create({
		safeArea: {
			flex: 1,
			backgroundColor: backgroundColor,
			paddingTop: insets.top,
			paddingBottom: insets.bottom,
			paddingLeft: insets.left,
			paddingRight: insets.right,
		},
		contentContainer: {
			flex: 1,
			paddingBottom: insets.bottom,
		},
		bgImg: {
			flex: 1,
		},
	});
