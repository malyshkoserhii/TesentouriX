import * as React from 'react';
import * as ImagePicker from 'react-native-image-picker';
import {
	request,
	PERMISSIONS,
	PermissionStatus,
	check,
	RESULTS,
	openSettings,
} from 'react-native-permissions';

import { IMAGE_LIBRARY_OPTIONS } from '../constants';
import { Alert } from 'react-native';

export const useImagePicker = () => {
	const [localImage, setLocalImage] = React.useState<string | undefined>(
		undefined,
	);
	const [pathToLocalImage, setPathToLocalImage] = React.useState<
		string | undefined
	>(undefined);

	const checkPermissions = async () => {
		check(PERMISSIONS.IOS.PHOTO_LIBRARY)
			.then(async (result: PermissionStatus) => {
				switch (result) {
					case RESULTS.UNAVAILABLE:
						console.log(
							'This feature is not available (on this device / in this context)',
						);
						break;
					case RESULTS.DENIED:
						console.log(
							'The permission has not been requested / is denied but requestable',
						);
						await requestPermisson();
						break;
					case RESULTS.LIMITED:
						console.log(
							'The permission is limited: some actions are possible',
						);
						openPicker();
						break;
					case RESULTS.GRANTED:
						console.log('The permission is granted');
						openPicker();
						break;
					case RESULTS.BLOCKED:
						console.log(
							'The permission is denied and not requestable anymore',
						);
						await requestPermisson();
						break;
				}
			})
			.catch((error) => {
				Alert.alert(String(error));
			});
	};

	const requestPermisson = async () => {
		await request(PERMISSIONS.IOS.PHOTO_LIBRARY).then(
			(result: PermissionStatus) => {
				switch (result) {
					case RESULTS.UNAVAILABLE:
						console.log(
							'This feature is not available (on this device / in this context)',
						);
						break;
					case RESULTS.DENIED:
						console.log(
							'The permission has not been requested / is denied but requestable',
						);
						break;
					case RESULTS.LIMITED:
						console.log(
							'The permission is limited: some actions are possible',
						);
						openPicker();
						break;
					case RESULTS.GRANTED:
						console.log('The permission is granted');
						openPicker();
						break;
					case RESULTS.BLOCKED:
						console.log(
							'The permission is denied and not requestable anymore',
						);
						console.log('here2');
						openSettings().catch(() =>
							Alert.alert(
								'Somethig went wrong while oppening settings',
							),
						);
						break;
				}
			},
		);
	};

	const onImageLibraryPress = checkPermissions;

	const openPicker = React.useCallback(() => {
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
