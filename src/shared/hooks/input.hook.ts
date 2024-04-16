import * as React from 'react';
import {
	NativeSyntheticEvent,
	TextInput,
	TextInputChangeEventData,
	TextInputFocusEventData,
} from 'react-native';

type UseInput = {
	onBlur?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
};

export const useInput = ({ onBlur }: UseInput) => {
	const [isFocused, setIsFocused] = React.useState(false);

	const inputRef = React.useRef<TextInput>(null);

	const handleFocus = () => {
		setIsFocused(true);
	};

	const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
		setIsFocused(false);
		onBlur?.(e);
	};

	const handlePress = () => {
		const isInputFocused = inputRef?.current?.isFocused();

		if (!isInputFocused) {
			inputRef?.current?.focus();
		}
	};

	return {
		isFocused,
		inputRef,
		handleFocus,
		handleBlur,
		handlePress,
	};
};
