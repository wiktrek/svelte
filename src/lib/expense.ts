// $lib/expense
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
export function h_to_min(hStr: string): number {
	let minutes = -100;
	const a = hStr.split(':');
	if (a.length != 2) return -100;
	const h = Number(a[0]);
	const m = Number(a[1]);
	if (m > 60 || h > 24 || a[0].length != 2 || a[1].length != 2 || m < 0 || h < 0) return -100;
	minutes = h * 60 + m;
	return minutes;
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
	currency?: string;
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
