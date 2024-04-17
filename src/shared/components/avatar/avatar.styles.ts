import { StyleSheet } from 'react-native';
import { COLORS, commonStyles } from 'src/shared/themes';

export const styles = StyleSheet.create({
	avatarWrapper: {
		position: 'relative',
		marginBottom: 24,
		alignItems: 'center',
	},
	avatarBgImg: {
		width: '100%',
		alignItems: 'center',
	},
	imgWrapper: {
		position: 'relative',
	},
	avatar: {
		width: 120,
		height: 120,
		borderRadius: 60,
	},
	avatarPlaceholder: {
		width: 120,
		height: 120,
		borderRadius: 60,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: COLORS.chineseSilver,
	},
	text: {
		...commonStyles.smallText,
	},
	username: {
		...commonStyles.mediumText,
		color: COLORS.carmineRed,
		marginTop: 8,
	},
	loader: {
		position: 'absolute',
		top: 54,
		left: 54,
	},
});
