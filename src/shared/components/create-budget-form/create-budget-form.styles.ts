import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from 'src/shared/themes';

export const styles = StyleSheet.create({
	title: {
		marginTop: 8,
		marginBottom: 16,
	},
	pageWrapper: {
		flex: 1,
		justifyContent: 'flex-end',
	},
	image: {
		width: 330,
		height: 177,
		alignSelf: 'center',
		marginBottom: 16,
	},
	contentContainer: {
		flexGrow: 1,
	},
	kwota: {
		paddingHorizontal: 24,
		marginBottom: 40,
	},
	kwotaText: {
		marginBottom: 11,
		fontFamily: FONTS.Lato.semiBold,
		fontSize: 18,
		lineHeight: 22,
		color: COLORS.lotin,
	},
	kwotaTotal: {
		fontFamily: FONTS.Lato.semiBold,
		fontSize: 64,
		color: COLORS.white,
		lineHeight: 77,
	},
	form: {
		borderTopLeftRadius: 40,
		borderTopRightRadius: 40,
		backgroundColor: COLORS.brightGray,
		paddingTop: 24,
		paddingBottom: 34,
		paddingHorizontal: 24,
	},
	button: {
		marginTop: 24,
	},
	btnText: {
		fontFamily: FONTS.Lato.medium,
	},
});

export const buttonBg = (btnBgColor: string) =>
	StyleSheet.create({
		color: {
			backgroundColor: btnBgColor,
		},
	});
