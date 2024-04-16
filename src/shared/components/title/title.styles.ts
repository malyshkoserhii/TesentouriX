import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/shared/themes';

export const styles = StyleSheet.create({
	title: {
		fontFamily: FONTS.Lato.bold,
		fontSize: 24,
		lineHeight: 36,
		letterSpacing: 8,
		color: COLORS.carmineRed,
		opacity: 0.3,
		textTransform: 'uppercase',
		textAlign: 'center',
	},
});
