import { CharacterInfroParams } from './screen-params.type';

export enum NAVIGATION_KEYS {
	HOME = 'HOME',
	CHARACTER_INFO = 'CHARACTER_INFO',
}

export type RootStackParamList = {
	[NAVIGATION_KEYS.HOME]: undefined;
	[NAVIGATION_KEYS.CHARACTER_INFO]: CharacterInfroParams;
};
