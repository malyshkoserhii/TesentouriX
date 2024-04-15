import { StyleSheet } from 'react-native';

import { FONTS } from './fonts';
import { COLORS } from './colors';

export const commonStyles = StyleSheet.create({
	center: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	rowCenter: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	rowBetween: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	smallText: {
		fontFamily: FONTS.Lato.regular,
		fontSize: 14,
		color: COLORS.eerieBlack,
	},
	mediumText: {
		fontFamily: FONTS.Roboto.regular,
		fontSize: 16,
		color: COLORS.eerieBlack,
	},
	hugeText: {
		fontFamily: FONTS.Roboto.regular,
		fontSize: 32,
		color: COLORS.eerieBlack,
	},
	title: {
		fontFamily: FONTS.Roboto.regular,
		fontSize: 28,
		color: COLORS.eerieBlack,
	},
	subTitle: {
		fontFamily: FONTS.Roboto.regular,
		fontSize: 24,
		color: COLORS.eerieBlack,
	},
	boxShadow: {
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowColor: COLORS.antiFlashWhite,
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
});
