import { StyleSheet } from 'react-native';
import { EdgeInsets } from 'react-native-safe-area-context';

export const styles = (insets: EdgeInsets) =>
	StyleSheet.create({
		container: {
			flex: 1,
			paddingLeft: insets.left,
			paddingRight: insets.right,
			paddingBottom: insets.bottom,
		},
	});
