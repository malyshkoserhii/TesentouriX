import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from '../../themes';

export const styles = StyleSheet.create({
	modal: {
		margin: 0,
		justifyContent: 'flex-end',
	},
	contentWrapper: {
		paddingTop: 16,
		paddingBottom: 32,
		backgroundColor: COLORS.eerieBlack,
		borderTopLeftRadius: 32,
		borderTopRightRadius: 32,
	},
	childrenWrapper: {
		paddingTop: 16,
		paddingHorizontal: 24,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	titleWrapper: {
		borderBottomWidth: 1,
		borderBottomColor: COLORS.dimGrey,
		borderStyle: 'solid',
		paddingBottom: 16,
	},
	title: {
		paddingHorizontal: 24,
		color: COLORS.antiFlashWhite,
		fontFamily: FONTS.Roboto.regular,
		fontSize: 20,
		lineHeight: 24,
		textAlign: 'center',
	},
	closeBlock: {
		flexDirection: 'row',
		paddingHorizontal: 24,
	},
	closeTitle: {
		marginLeft: 12,
		color: COLORS.antiFlashWhite,
		fontFamily: FONTS.Roboto.regular,
		fontSize: 26,
		lineHeight: 34,
		textTransform: 'capitalize',
	},
});
