import { StyleSheet } from 'react-native';
import { COLORS, FONTS, commonStyles } from 'src/shared/themes';

export const styles = StyleSheet.create({
	block: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 24,
		marginTop: 16,
		marginBottom: 8,
	},
	blockTitle: {
		...commonStyles.mediumText,
		color: COLORS.gunmetal,
	},
	dotsWrapper: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: 41,
		height: 17,
		paddingHorizontal: 9,
		backgroundColor: 'rgba(139, 151, 174, 0.2)',
		borderRadius: 24,
	},
	dot: {
		width: 6,
		height: 6,
		borderRadius: 3,
		backgroundColor: COLORS.brightGray,
	},
	headerContainer: {
		width: 72,
		height: '100%',
		minHeight: 200,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: COLORS.gunmetal,
		marginRight: 16,
		borderRadius: 40,
		borderWidth: 1,
		borderStyle: 'dashed',
		borderColor: COLORS.white,
	},
	contentContainer: {
		paddingHorizontal: 24,
		marginBottom: 16,
	},
	imgWrapper: {
		width: 40,
		height: 40,
		marginRight: 16,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(44, 45, 69, 0.1)',
		borderRadius: 10,
		marginBottom: 8,
	},
	img: {
		width: 24,
		height: 24,
	},
	item: {
		width: 172,
		padding: 16,
		marginRight: 16,
		borderRadius: 24,
	},
	textWrapper: {
		marginRight: 10,
	},
	title: {
		...commonStyles.smallText,
		color: COLORS.white,
		marginBottom: 8,
	},
	sumWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	sumContainer: {
		alignItems: 'center',
	},
	bonusBlock: {
		padding: 12,
		justifyContent: 'center',
		alignItems: 'center',
	},
	sum: {
		...commonStyles.mediumPlusText,
		fontFamily: FONTS.Lato.bold,
	},
	arrow: {
		marginLeft: 8,
		transform: [{ rotate: '180deg' }],
	},
	income: {
		color: COLORS.philippineGreen,
	},
	spending: {
		color: COLORS.kuCrimson,
	},
	emptyText: {
		...commonStyles.mediumText,
		color: COLORS.eerieBlack,
		alignSelf: 'center',
	},
});
