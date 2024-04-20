import { ImageSourcePropType } from 'react-native';

export type Note = {
	id: string;
	title: string;
	description: string;
};

export enum BudgetType {
	WYDATEK = 'WYDATEK',
	SKARBONKI = 'SKARBONKI',
	DOCHOD = 'DOCHOD',
}

export type Budget = {
	id: string;
	title: string;
	sum: string;
	image: ImageSourcePropType;
	date: string;
	type: BudgetType;
	bonus?: string;
};
