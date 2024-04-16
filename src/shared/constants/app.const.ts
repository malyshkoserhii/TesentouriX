import * as ImagePicker from 'react-native-image-picker';

export const IMAGE_LIBRARY_OPTIONS: ImagePicker.ImageLibraryOptions = {
	maxHeight: 400,
	maxWidth: 300,
	selectionLimit: 1,
	mediaType: 'photo',
	includeBase64: true,
};
