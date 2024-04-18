import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/shared/themes';

export const styles = StyleSheet.create({
	container: {
		position: 'relative',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingVertical: 16,
		paddingHorizontal: 16,
		marginBottom: 24,
	},
	titleBox: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	title: {
		flexGrow: 1,
		fontSize: 18,
		fontFamily: FONTS.Lato.bold,
		color: COLORS.eerieBlack,
		lineHeight: 27,
		textAlign: 'center',
	},
	pressarableIcon: {
		width: 40,
		height: 40,
	},
	rightButtonWrapper: {
		width: 40,
		height: 40,
		flexDirection: 'row',
		alignItems: 'center',
	},
	dummy: {
		width: 40,
		height: 40,
	},
});
