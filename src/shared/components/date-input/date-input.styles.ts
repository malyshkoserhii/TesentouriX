import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/shared/themes';

export const styles = StyleSheet.create({
	modal: {
		margin: 0,
		justifyContent: 'flex-end',
		paddingHorizontal: 24,
		paddingBottom: 24,
	},
	dateInput: {},
	container: {
		width: '100%',
		marginBottom: 16,
	},
	inputBox: {
		position: 'relative',
	},
	input: {
		paddingVertical: 8,
		paddingHorizontal: 16,
		color: COLORS.coolGrey,
		backgroundColor: COLORS.white,

		borderRadius: 16,
		lineHeight: 20,
		borderWidth: 1,
		borderColor: COLORS.cultured,
	},
	inputText: {
		color: COLORS.coolGrey,
		fontFamily: FONTS.Lato.regular,
		fontSize: 16,
	},
	calendarContainer: {
		paddingHorizontal: 24,
		paddingVertical: 24,
		borderRadius: 16,
		marginBottom: 16,
	},
});
