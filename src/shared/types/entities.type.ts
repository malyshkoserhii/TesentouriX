export type Note = {
	id: string;
	title: string;
	description: string;
};

export enum BudgetType {
	WYDATEK = 'WYDATEK',
	SAKARBONKI = 'SKARBONKI',
	DOCHOD = 'DOCHOD',
}
