import { StyleSheet } from 'react-native';
import { commonStyles } from 'src/shared/themes';

export const styles = StyleSheet.create({
	contentContainer: {
		paddingHorizontal: 24,
	},
	container: {},
	item: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 12,
		paddingVertical: 4,
	},
	currencyBlock: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	currency: {
		...commonStyles.smallText,
		marginRight: 9,
	},
});
