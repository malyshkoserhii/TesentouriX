import * as React from 'react';
import * as ImagePicker from 'react-native-image-picker';

import { IMAGE_LIBRARY_OPTIONS } from '../constants';

export const useImagePicker = () => {
	const [localImage, setLocalImage] = React.useState<string | undefined>(
		undefined,
	);
	const [pathToLocalImage, setPathToLocalImage] = React.useState<
		string | undefined
	>(undefined);

	const onImageLibraryPress = React.useCallback(() => {
		ImagePicker.launchImageLibrary(IMAGE_LIBRARY_OPTIONS, (res) => {
			if (res.didCancel) {
				return;
			}
			const img = `data:${res.assets && res?.assets[0]?.type};base64, ${
				res.assets && res.assets[0]?.base64
			}`;
			setPathToLocalImage(res.assets && res.assets[0]?.uri);
			setLocalImage(img);
		});
	}, []);

	return {
		localImage,
		pathToLocalImage,
		onImageLibraryPress,
		setPathToLocalImage,
		setLocalImage,
	};
};
