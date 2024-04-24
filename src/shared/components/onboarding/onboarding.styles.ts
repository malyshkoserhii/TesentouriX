import { Dimensions, StyleSheet } from 'react-native';

import { COLORS, commonStyles } from 'src/shared/themes';

export const styles = StyleSheet.create({
	contentContainer: {
		flexGrow: 1,
	},
	pageContainer: {
		flex: 1,
		justifyContent: 'space-between',
	},
	titleWrapper: {},
	stepImg: {
		width: 345,
		height: 80,
		alignSelf: 'center',
	},
	content: {
		position: 'relative',
		borderTopLeftRadius: 80,
		borderTopRightRadius: 80,
		backgroundColor: COLORS.gunmetal,
		paddingTop: 78,
		paddingHorizontal: 24,
		paddingBottom: 24,
	},
	logo: {
		width: 222,
	},
	title: {
		...commonStyles.mediumPlusText,
		marginBottom: 16,
		textTransform: 'capitalize',
	},
	titleWidth: {
		width: 222,
	},
	description: {
		...commonStyles.mediumText,
		marginBottom: 26,
		textTransform: 'capitalize',
	},
	mainImg: {
		top: -140,
		left: 0,
		position: 'absolute',
		width: Dimensions.get('screen').width,
		height: 219,
	},
});
