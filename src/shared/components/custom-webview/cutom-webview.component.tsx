import * as React from 'react';
import { SafeAreaView, View } from 'react-native';
import Modal from 'react-native-modal';
import WebView from 'react-native-webview';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { safeArea, styles } from './cutom-webview.styles';

import Cross from '../../../assets/icons/cross.svg';
import { PressarableIcon } from '../pressarable-icon/pressarable-icon.component';

type CustomWebviewProps = {
	termsLink: string;
	isWebViewOpened: boolean;
	onClose: () => void;
};

export const CustomWebview: React.FunctionComponent<CustomWebviewProps> = ({
	termsLink,
	isWebViewOpened,
	onClose,
}) => {
	const insets = useSafeAreaInsets();
	return (
		<Modal
			isVisible={isWebViewOpened}
			style={styles.modal}
			backdropTransitionOutTiming={0}
		>
			<View style={safeArea(insets).safeArea}>
				<View style={styles.iconWrapper}>
					<PressarableIcon
						icon={<Cross />}
						onPress={onClose}
						extraStyles={styles.pressarableIcon}
					/>
				</View>
				<WebView style={styles.webView} source={{ uri: termsLink }} />
			</View>
		</Modal>
	);
};
