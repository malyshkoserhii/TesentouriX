import { StyleSheet } from 'react-native';
import { COLORS, FONTS, commonStyles } from 'src/shared/themes';

export const styles = StyleSheet.create({
	contentContainer: {
		flexGrow: 1,
		justifyContent: 'space-between',
		paddingBottom: 16,
		paddingHorizontal: 16,
	},
	img: {
		width: 345,
		height: 177,
		marginBottom: 16,
	},
	textWrapper: {
		paddingVertical: 16,
		paddingHorizontal: 8,
		backgroundColor: COLORS.white,
		borderRadius: 20,
	},
	title: {
		...commonStyles.mediumText,
		color: COLORS.eerieBlack,
	},
	description: {
		fontSize: 14,
		fontFamily: FONTS.Lato.regular,
		color: COLORS.eerieBlack,
		lineHeight: 21,
	},
});
