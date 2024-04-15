import { StyleSheet } from 'react-native';
import { EdgeInsets } from 'react-native-safe-area-context';

import { COLORS } from 'src/shared/themes';

export const styles = (insets: EdgeInsets) => StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: COLORS.antiFlashWhite,
		paddingTop: insets.top,
		paddingBottom: insets.bottom,
		paddingLeft: insets.left,
		paddingRight: insets.right,
	},
	contentContainer: {
		flex: 1,
		paddingHorizontal: 16,
	},
});
