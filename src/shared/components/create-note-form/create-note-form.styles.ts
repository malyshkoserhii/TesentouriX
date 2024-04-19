import { StyleSheet } from 'react-native';
import { COLORS, commonStyles } from 'src/shared/themes';

export const styles = StyleSheet.create({
	title: {
		marginTop: 8,
		marginBottom: 16,
	},
	pageWrapper: {
		flex: 1,
		justifyContent: 'space-between',
	},
	image: {
		width: 330,
		height: 177,
		alignSelf: 'center',
		marginBottom: 16,
	},
	contentContainer: {
		flexGrow: 1,
		paddingBottom: 16,
	},
	form: {
		paddingHorizontal: 24,
	},
	button: {
		width: '100%',
	},
	buttonContetnt: {
		flexDirection: 'row-reverse',
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
	authSwitchText: {
		...commonStyles.smallText,
	},
	authSwitchLogin: {
		...commonStyles.smallText,
		marginLeft: 4,
		color: COLORS.gunmetal,
		textDecorationLine: 'underline',
	},
});
