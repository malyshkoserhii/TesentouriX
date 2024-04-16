import { StyleSheet } from 'react-native';

import { COLORS, FONTS, commonStyles } from 'src/shared/themes';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 24,
		justifyContent: 'center',
	},
	image: {
		width: 200,
		height: 200,
	},
	wrapper: {
		marginBottom: 64,
		justifyContent: 'center',
		alignItems: 'center',
	},
	header: {
		marginBottom: 16,
	},
	text: {
		...commonStyles.mediumText,
		color: COLORS.gunmetal,
		textAlign: 'center',
		marginBottom: 20,
	},
	description: {
		marginBottom: 64,
		fontFamily: FONTS.Lato.regular,
		fontSize: 20,
		lineHeight: 24,
		color: COLORS.antiFlashWhite,
		textAlign: 'center',
	},
	btn: {
		width: '100%',
	},
});
