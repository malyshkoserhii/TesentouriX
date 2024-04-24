import { StyleSheet } from 'react-native';
import { commonStyles } from 'src/shared/themes';

export const styles = StyleSheet.create({
	contentContainer: {
		paddingHorizontal: 24,
		paddingBottom: 24,
	},
	name: {
		...commonStyles.smallText,
		flex: 1,
		textAlign: 'center',
	},
	bonus: {
		...commonStyles.smallText,
		width: 60,
	},
	item: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 20,
	},
});

export const dotStyles = (bgColor: string) =>
	StyleSheet.create({
		dot: {
			width: 14,
			height: 14,
			borderRadius: 7,
			backgroundColor: bgColor,
		},
	});
