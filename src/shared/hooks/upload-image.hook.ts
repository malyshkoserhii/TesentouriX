import { Platform } from 'react-native';
import storage from '@react-native-firebase/storage';

export const useUploadImage = () => {
	const uploadImage = async (pathToLocalImage: string | undefined) => {
		try {
			if (pathToLocalImage) {
				const filename = pathToLocalImage.substring(
					pathToLocalImage.lastIndexOf('/') + 1,
				);
				const uploadUri =
					Platform.OS === 'ios'
						? pathToLocalImage.replace('file://', '')
						: pathToLocalImage;
				const reference = storage().ref(filename);
				await reference.putFile(uploadUri);
				const imageUrl = await reference.getDownloadURL();
				return imageUrl;
			}
			return undefined;
		} catch (error) {
			if (error instanceof Error) {
				throw new Error(error.message);
			}
			console.log('Upload image Error: ', error);
		}
	};

	return {
		uploadImage,
	};
};
