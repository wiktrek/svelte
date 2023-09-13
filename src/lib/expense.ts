export function format(a: number): string {
	if (a < 10) {
		return `0${a}`;
	}
	return `${a}`;
}
export function min_to_h(m: number): string {
	let result = '';
	const h = Number((m / 60).toFixed());
	const minutes = m - h * 60;
	if (minutes < 10) {
		result = `${h}:0${minutes}`;
		return result;
	}
	result = `${h}:${minutes}`;
	return result;
}
// if it works don't touch it
export function sort_month(expenses: Month[]): Month[] {
	expenses.map((e) => {
		e.expenses.sort((a, b) => a.date - b.date);
		e.expenses.map((b) => {
			b.expenses.sort((a, b) => a.time - b.time);
		});
	});
	return expenses;
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
