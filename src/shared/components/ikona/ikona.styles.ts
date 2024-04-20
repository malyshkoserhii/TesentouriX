import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/shared/themes';

export const styles = StyleSheet.create({
	container: {
		backgroundColor: COLORS.white,
		borderRadius: 16,
		paddingHorizontal: 16,
		paddingVertical: 10,
		marginVertical: 8,
		marginBottom: 16,
	},
	images: {
		flexDirection: 'row',
	},
	ikonaHeader: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	ikonaText: {
		fontFamily: FONTS.Lato.regular,
		fontSize: 16,
		color: COLORS.coolGrey,
	},
	arrowDown: {
		transform: [{ rotate: '270deg' }],
	},
	arrowUp: {
		transform: [{ rotate: '90deg' }],
	},
	iconWrapper: {
		marginTop: 20,
		width: 40,
		height: 40,
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: 16,
		backgroundColor: 'rgba(44, 45, 69, 0.1)',
		borderRadius: 10,
	},
	img: {
		width: 24,
		height: 24,
		tintColor: COLORS.eerieBlack,
	},
	activeBg: {
		backgroundColor: COLORS.carmineRed,
	},
	activeTintColor: {
		tintColor: COLORS.white,
	},
});
