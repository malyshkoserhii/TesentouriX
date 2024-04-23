import { Dimensions, StyleSheet } from 'react-native';
import { EdgeInsets } from 'react-native-safe-area-context';
import { COLORS, FONTS, commonStyles } from 'src/shared/themes';

const IMAGE_TOP_POSITION = 30;

export const styles = StyleSheet.create({
	contentContainer: {
		position: 'relative',
	},
	folderWrapper: {
		backgroundColor: COLORS.cultured,
	},
	imageWrapper: {
		position: 'relative',
		width: Dimensions.get('screen').width,
		height: 221 - IMAGE_TOP_POSITION,
	},
	homepageImg: {
		position: 'absolute',
		left: 0,
		top: -IMAGE_TOP_POSITION,
		width: Dimensions.get('screen').width,
		height: 221,
	},
	homepageHeader: {
		marginTop: 16,
		marginBottom: 24,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	avatarWrapper: {
		marginBottom: 0,
	},
	avatar: {
		width: 36,
		height: 36,
		borderRadius: 18,
	},
	userInfo: {
		flexDirection: 'row',
		width: '75%',
	},
	usernameBlock: {
		marginLeft: 8,
	},
	username: {
		...commonStyles.mediumText,
		color: COLORS.cultured,
		lineHeight: 19,
	},
	grats: {
		...commonStyles.smallText,
		lineHeight: 17,
	},
	usermenu: {
		width: '22%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-end',
	},
	notesIcon: {
		marginRight: 18,
	},
	incomeBlock: {
		marginBottom: 16,
	},
	icomeTitle: {
		...commonStyles.mediumText,
	},
	sumWrapper: {
		flexDirection: 'row',
		width: '100%',
	},
	dollars: {
		...commonStyles.hugeText,
		color: COLORS.cultured,
	},
	cents: {
		...commonStyles.hugeText,
	},
	budgetBlock: {
		flexDirection: 'row',
		borderRadius: 30,
		paddingVertical: 12,
		backgroundColor: COLORS.cultured,
	},
	incomeInfo: {
		alignItems: 'center',
		width: '50%',
		borderRightWidth: 0.5,
		borderRightColor: 'rgba(44, 45, 69, 0.1)',
	},
	costsInfo: {
		alignItems: 'center',
		width: '50%',
		borderLeftWidth: 0.5,
		borderLeftColor: 'rgba(44, 45, 69, 0.1)',
	},
	budgetTitle: {
		...commonStyles.smallText,
		color: COLORS.eerieBlack,
		marginBottom: 4,
	},
	incomeDigits: {
		fontSize: 17,
		fontFamily: FONTS.Lato.bold,
		color: COLORS.eerieBlack,
	},
	costsDigits: {
		fontSize: 17,
		fontFamily: FONTS.Lato.bold,
		color: COLORS.carmineRed,
	},
});

export const container = (insets: EdgeInsets) =>
	StyleSheet.create({
		topFolder: {
			paddingTop: insets.top,
			paddingBottom: 24,
			paddingHorizontal: 24,
			backgroundColor: COLORS.gunmetal,
			borderBottomLeftRadius: 40,
			borderBottomRightRadius: 40,
		},
	});
