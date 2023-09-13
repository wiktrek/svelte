export function format(a: number): string {
	if (a < 10) {
		return `0${a}`;
	}
	return `${a}`;
}
// types
export interface Settings {
	currency: string;
}
// time = minutes
export interface Expense {
	amount: number;
	time: number;
}

export interface Day {
	date: number;
	expenses: Expense[];
}
export interface Month {
	expenses: Day[];
	month: number;
}
