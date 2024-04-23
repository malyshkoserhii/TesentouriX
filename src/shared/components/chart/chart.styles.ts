import { StyleSheet } from 'react-native';
import { container } from '../homepage-top/homepage-top.styles';

export const styles = StyleSheet.create({
	item: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
});

export const dotStyles = (bgColor: string) =>
	StyleSheet.create({
		dot: {
			backgroundColor: bgColor,
		},
	});
