import * as React from 'react';
import {
	NativeSyntheticEvent,
	StyleProp,
	Text,
	TextInput,
	TextInputChangeEventData,
	TextStyle,
	TouchableOpacity,
	View,
	ViewStyle,
} from 'react-native';

import { styles } from './input.styles';
import { COLORS } from '../../../shared/themes';
import { useInput } from 'src/shared/hooks';

export type InputType = 'text' | 'password' | 'email';

type InputProps = {
	value: string;
	onChange: (value: string) => void;
	onBlur?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
	label?: string;
	placeholder?: string;
	editable?: boolean;
	error?: string;
	touched?: boolean;
	type?: InputType;
	inputContainerStyles?: StyleProp<ViewStyle>;
	extraLabelStyles?: StyleProp<TextStyle>;
	extraInputStyles?: StyleProp<ViewStyle>;
	multiline?: boolean;
	numberOfLines?: number;
	notEditableWhite?: boolean;
	isSkarbonki?: boolean;
	bonus?: number;
	extraErrorStyles?: StyleProp<TextStyle>;
};

export const Input: React.FunctionComponent<InputProps> = ({
	value,
	label,
	onChange,
	onBlur,
	error,
	touched,
	editable = true,
	inputContainerStyles = {},
	placeholder = '',
	extraInputStyles = {},
	extraLabelStyles = {},
	multiline = false,
	numberOfLines = 1,
	isSkarbonki = false,
	bonus = '00.00',
	extraErrorStyles = {},
}) => {
	const { handleBlur, handlePress, handleFocus } = useInput({
		onBlur,
	});
	return (
		<View style={[styles.container, inputContainerStyles]}>
			{Boolean(label) && (
				<Text style={[styles.label, extraLabelStyles]}>{label}</Text>
			)}

			<View style={styles.inputBox}>
				<TouchableOpacity onPress={handlePress}>
					<TextInput
						style={[styles.input, extraInputStyles]}
						value={value}
						onChangeText={onChange}
						onFocus={handleFocus}
						onBlur={handleBlur}
						placeholderTextColor={COLORS.coolGrey}
						placeholder={placeholder}
						autoCapitalize="none"
						editable={editable}
						multiline={multiline}
						numberOfLines={numberOfLines}
					/>
				</TouchableOpacity>

				{isSkarbonki && (
					<View style={styles.bonusBlock}>
						<Text numberOfLines={1} style={styles.title}>
							{bonus || '00.00'}%
						</Text>
					</View>
				)}
			</View>

			{error && touched && (
				<Text style={[styles.error, extraErrorStyles]}>{error}</Text>
			)}
		</View>
	);
};
