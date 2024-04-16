import { StyleProp, Text, TextStyle } from 'react-native';

import { styles } from './title.styles';

type TitleProps = {
	extraStyles?: StyleProp<TextStyle>;
};

export const Title: React.FunctionComponent<TitleProps> = ({
	extraStyles = {},
}) => {
	return <Text style={[styles.title, extraStyles]}>TesentouriX</Text>;
};
