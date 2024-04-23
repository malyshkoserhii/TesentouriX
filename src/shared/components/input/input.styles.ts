import { StyleSheet } from 'react-native';

import { COLORS, FONTS, commonStyles } from 'src/shared/themes';

export const styles = StyleSheet.create({
	container: {
		position: 'relative',
		width: '100%',
		marginBottom: 16,
	},
	label: {
		fontFamily: FONTS.Lato.medium,
		fontSize: 12,
		lineHeight: 16,
		color: COLORS.white,
		marginBottom: 6,
	},
	inputBox: {
		position: 'relative',
	},
	input: {
		height: 50,
		paddingHorizontal: 16,
		color: COLORS.coolGrey,
		backgroundColor: COLORS.white,
		fontFamily: FONTS.Lato.regular,
		fontSize: 16,
		borderRadius: 16,
		lineHeight: 20,
		borderWidth: 1,
		borderColor: COLORS.cultured,
	},
	valid: {
		borderColor: COLORS.americanGreen,
	},
	invalid: {
		borderColor: COLORS.internationalOrange,
	},
	filled: {
		borderColor: COLORS.antiFlashWhite,
	},
	error: {
		position: 'absolute',
		bottom: -16,
		left: 0,
		fontFamily: FONTS.Lato.regular,
		fontSize: 12,
		color: COLORS.internationalOrange,
	},
	bonusBlock: {
		position: 'absolute',
		top: 12,
		right: 16,
		width: 65,
		height: 26,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(255, 0, 48, 0.5)',
		borderRadius: 24,
	},
	title: {
		...commonStyles.smallText,
		color: COLORS.white,
	},
});
