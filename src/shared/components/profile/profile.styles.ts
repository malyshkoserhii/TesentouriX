import { StyleSheet } from 'react-native';
import { COLORS, commonStyles } from 'src/shared/themes';

export const styles = StyleSheet.create({
	headerContainer: {
		marginBottom: 0,
		paddingVertical: 0,
		paddingTop: 16,
	},
	title: {
		marginTop: 8,
		marginBottom: 16,
	},
	avatarWrapper: {
		borderWidth: 1,
		borderColor: COLORS.carmineRed,
	},
	pageWrapper: {
		flex: 1,
		justifyContent: 'space-between',
	},
	contentContainer: {
		flexGrow: 1,
		paddingBottom: 16,
	},
	inputWrapper: {
		paddingHorizontal: 24,
	},
	button: {
		width: '100%',
	},
	btnWrapper: {
		width: '100%',
		paddingHorizontal: 24,
	},
	authSwitch: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginBottom: 10,
	},
	authSwitchLogin: {
		...commonStyles.smallText,
		marginLeft: 4,
		textDecorationLine: 'underline',
		color: COLORS.carmineRed,
	},
});
