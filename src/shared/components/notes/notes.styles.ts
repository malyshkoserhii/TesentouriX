import { StyleSheet, View } from 'react-native';
import { COLORS, FONTS, commonStyles } from 'src/shared/themes';

export const styles = StyleSheet.create({
	contentContainer: {
		flexGrow: 1,
		width: '100%',
		paddingHorizontal: 24,
		paddingBottom: 16,
	},
	headerContainer: {
		marginBottom: 0,
	},
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
	emptyWrapper: {
		width: '100%',
		flexGrow: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: COLORS.white,
		paddingHorizontal: 24,
		paddingBottom: 24,
		borderRadius: 20,
	},
	emptyContainerText: {
		flexDirection: 'row',
	},
	emptyTextWrapper: {
		flexGrow: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	emptyText: {
		fontFamily: FONTS.Lato.bold,
		fontSize: 16,
		color: COLORS.coolGrey,
		marginLeft: 8,
	},
	plus: {
		marginTop: 16,
		alignSelf: 'center',
		justifyContent: 'center',
		alignItems: 'center',
		width: 48,
		height: 48,
		borderRadius: 24,
		backgroundColor: COLORS.carmineRed,
	},
});
