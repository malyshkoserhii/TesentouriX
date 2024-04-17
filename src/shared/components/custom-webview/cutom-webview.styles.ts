import { StyleSheet } from 'react-native';

import { COLORS } from '../../themes';
import { EdgeInsets } from 'react-native-safe-area-context';

export const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 60,
		marginBottom: 16,
	},

	modal: {
		flex: 1,
		margin: 0,
	},
	iconWrapper: {
		backgroundColor: COLORS.cultured,
		paddingHorizontal: 16,
		paddingVertical: 4,
	},
	webView: {
		flex: 1,
		flexGrow: 1,
	},
	pressarableIcon: {
		backgroundColor: COLORS.dimGrey,
		borderRadius: 8,
		width: 34,
		height: 34,
	},
	loadingWrapper: {
		flex: 1,
	},
});

export const safeArea = (insets: EdgeInsets) =>
	StyleSheet.create({
		safeArea: {
			flex: 1,
			paddingTop: insets.top,
			paddingBottom: insets.bottom,
			paddingLeft: insets.left,
			paddingRight: insets.right,
		},
	});
