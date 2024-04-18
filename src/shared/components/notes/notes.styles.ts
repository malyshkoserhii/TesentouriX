import { StyleSheet } from 'react-native';
import { COLORS, FONTS, commonStyles } from 'src/shared/themes';

export const styles = StyleSheet.create({
	contentContainer: {
		paddingHorizontal: 24,
		paddingBottom: 16,
	},
	container: {},
	item: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 12,
		paddingVertical: 4,
	},
	content: {
		flexDirection: 'row',
		width: '80%',
	},
	image: {
		width: 48,
		height: 48,
		borderRadius: 10,
		marginRight: 12,
	},
	arrow: {
		transform: [{ rotate: '180deg' }],
	},
	textWrapper: {
		paddingRight: 20,
		justifyContent: 'space-between',
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
