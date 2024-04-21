import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/shared/themes';

export const styles = StyleSheet.create({
	button: {
		justifyContent: 'center',
		alignItems: 'center',
		height: 50,
		borderRadius: 20,
		backgroundColor: COLORS.carmineRed,
	},
	text: {
		fontFamily: FONTS.Lato.medium,
		fontSize: 16,
		letterSpacing: 0.5,
		color: COLORS.white,
	},
	disabledBtn: {
		backgroundColor: COLORS.dimGrey,
	},
	disabledText: {
		color: COLORS.chineseSilver,
	},
	content: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	iconWrapper: {
		marginRight: 8,
	},
});
