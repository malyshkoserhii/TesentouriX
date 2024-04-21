import { StyleSheet } from 'react-native';
import { COLORS, FONTS, commonStyles } from 'src/shared/themes';

export const styles = StyleSheet.create({
	headerText: {
		color: COLORS.white,
	},
	contentContainer: {
		flexGrow: 1,
		width: '100%',
		paddingHorizontal: 24,
		paddingBottom: 16,
	},
	imgWrapper: {
		width: 40,
		height: 40,
		marginRight: 16,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(44, 45, 69, 0.1)',
		borderRadius: 10,
	},
	img: {
		width: 24,
		height: 24,
	},
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		width: '70%',
	},
	item: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 12,
		paddingVertical: 4,
	},
	textWrapper: {
		width: '72%',
		marginRight: 10,
	},
	title: {
		...commonStyles.smallText,
		color: COLORS.eerieBlack,
	},
	date: {
		...commonStyles.smallText,
		fontSize: 10,
	},
	sumWrapper: {
		width: '30%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	sumContainer: {
		alignItems: 'center',
		width: '80%',
	},
	sum: {
		fontFamily: FONTS.Lato.bold,
		alignSelf: 'center',
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
});
