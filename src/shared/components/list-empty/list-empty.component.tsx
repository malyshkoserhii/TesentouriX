import * as React from 'react';
import { Text, View } from 'react-native';

import { styles } from './list-empty.styles';

type ListEmptyProps = {
	text: string;
};

export const ListEmpty: React.FunctionComponent<ListEmptyProps> = ({
	text,
}) => {
	return <Text style={styles.text}>{text}</Text>;
};
