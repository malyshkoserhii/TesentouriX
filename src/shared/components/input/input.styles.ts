import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/shared/themes';

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
		paddingVertical: 8,
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
});
