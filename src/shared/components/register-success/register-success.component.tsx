import { Image, StyleProp, Text, TextStyle, View } from 'react-native';

import { styles } from './register-success.styles';
import { LayoutWithBg } from '../layout/layout.component';
import { Button } from '../button/button.component';
import { IMAGES } from 'src/shared/constants/image-map.const';

type RegisterSuccessProps = {
	navigateToLogin: () => void;
	email: string;
	extraContainerStyles?: StyleProp<TextStyle>;
};

export const RegisterSuccess: React.FunctionComponent<RegisterSuccessProps> = ({
	navigateToLogin,
	email,
	extraContainerStyles = {},
}) => {
	return (
		<LayoutWithBg>
			<View style={[styles.container, extraContainerStyles]}>
				<View style={styles.wrapper}>
					<Image
						source={IMAGES.success}
						style={styles.image}
						resizeMode="contain"
					/>

					<Text style={styles.text}>
						{`Zarejestrowałeś się pomyślnie. Na Twój adres e-mail ${email} została wysłana wiadomość z potwierdzeniem.`}
					</Text>

					<Button
						text="Przejdź do logowania"
						onPress={navigateToLogin}
						extraBtnStyles={styles.btn}
					/>
				</View>
			</View>
		</LayoutWithBg>
	);
};
