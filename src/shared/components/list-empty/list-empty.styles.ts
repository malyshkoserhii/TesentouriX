import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/shared/themes';

export const styles = StyleSheet.create({
	emptyWrapper: {
		width: '100%',
		flexGrow: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: COLORS.white,
		paddingHorizontal: 24,
		paddingBottom: 24,
		borderRadius: 20,
	},
	emptyContainerText: {
		flexDirection: 'row',
	},
	emptyTextWrapper: {
		flexGrow: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	emptyText: {
		fontFamily: FONTS.Lato.bold,
		fontSize: 16,
		color: COLORS.coolGrey,
		marginLeft: 8,
	},
	plus: {
		marginTop: 16,
		alignSelf: 'center',
		justifyContent: 'center',
		alignItems: 'center',
		width: 48,
		height: 48,
		borderRadius: 24,
		backgroundColor: COLORS.carmineRed,
	},
});
