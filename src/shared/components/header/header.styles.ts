import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/shared/themes';

export const styles = StyleSheet.create({
	container: {
		position: 'relative',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingVertical: 16,
		paddingHorizontal: 16,
		marginBottom: 32,
		backgroundColor: COLORS.smokyBlack,
		borderBottomWidth: 1,
		borderStyle: 'solid',
		borderBottomColor: COLORS.dimGrey,
	},
	titleBox: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	title: {
		flexGrow: 1,
		fontSize: 26,
		fontFamily: FONTS.Roboto.regular,
		color: COLORS.antiFlashWhite,
		lineHeight: 34,
		textAlign: 'center',
	},
	pressarableIcon: {
		width: 40,
		height: 40,
	},
	rightButtonWrapper: {
		width: 40,
		height: 40,
		flexDirection: 'row',
		alignItems: 'center',
	},
	dummy: {
		width: 40,
		height: 40,
	},
});
