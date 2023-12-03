<!-- expense tracker -->
<!--
    make the code more readable 
    add expense
-->

<script lang="ts">
	import { writable, type Writable } from 'svelte/store';
	import Add from '../../components/Add.svelte';
	import { format, sort_month, min_to_h, h_to_min } from '$lib/expense';
	import type { Settings, Month } from '$lib/expense';
	let settings: Settings = {
		currency: 'zł'
	};
	let expenses: Month[] = [];
	let expenses_writable: Writable<Month[]> = writable(expenses);
	let error: Writable<string> = writable('');
	let example: Month = {
		month: 9,
		expenses: [
			{
				date: 11,
				expenses: [
					{
						amount: -10,
						time: 720
					},
					{ amount: -100, time: 721 },
					{ amount: 90, time: 724 }
				]
			},
			{
				date: 12,
				expenses: [
					{
						amount: 200,
						time: 500
					},
					{ amount: -10, time: 243 },
					{ amount: 10, time: 432 }
				]
			}
		]
	};
	expenses.push(example);
	expenses == sort_month(expenses);
	function add() {
		let day = Number((document.getElementById('day') as HTMLInputElement).value);
		let month = (document.getElementById('select') as HTMLSelectElement).value;
		let spent = (document.getElementById('select2') as HTMLSelectElement).value;
		let expense = (document.getElementById('expense') as HTMLInputElement).value;
		let time = h_to_min((document.getElementById('time') as HTMLInputElement).value);
		let amount = Number((document.getElementById('amount') as HTMLInputElement).value);
		if (day == null || expense == null || amount == null) return error.set('Error');
		if (amount < 0) return error.set('Amount less than zero');
		if (day >= 32) return error.set('Day needs to be less than 32');
		if (time < 0) return error.set('Time 00:00');
		if (spent == 'true') {
			console.log('ew');
			amount *= -1;
		}

		console.log(day, month, amount, expense, spent, time);
		push({
			month: Number(month),
			expenses: [
				{
					date: day,
					expenses: [
						{
							amount: amount,

							time: time
						}
					]
				}
			]
		});
		error.set(' ');
	}
	function push(a: Month) {
		// map months
		console.log(expenses, a);
		expenses.map((e) => {
			console.log('1', e.month, a.month);
			if (e.month == a.month) {
				// map days
				e.expenses.map((b) => {
					console.log('2');
					if (b.date == a.expenses[0].date) {
						console.log('3');
						return b.expenses.push({
							amount: a.expenses[0].expenses[0].amount,
							time: a.expenses[0].expenses[0].time
						});
					} else {
						return e.expenses.push({
							date: a.expenses[0].date,
							expenses: [
								{
									amount: a.expenses[0].expenses[0].amount,
									time: a.expenses[0].expenses[0].time
								}
							]
						});
					}
				});
			} else {
				expenses.push(a);
			}
		});
		expenses == sort_month(expenses);
		expenses_writable.set(expenses);
	}

	if (typeof localStorage !== `undefined`) {
		if (localStorage.getItem('expenses') !== null) {
			expenses = JSON.parse(localStorage.getItem('expenses') || '[]');
		}
	}
	let currency = settings.currency;
	function load() {
		let json = JSON.parse(localStorage.getItem('expenses') as string);
		expenses == json;
		expenses_writable.set(expenses);
	}
	function save() {
		let json = JSON.stringify(expenses);
		localStorage.setItem('expenses', json);
	}
</script>

<div class="text-center justify-center items-center text-3xl bg-[#161718]">
	<p class="absolute top-0 text-xl right-4">
		Currency
		<input
			type="text"
			class="bg-[#05080a] rounded-md m-1 border-none outline-none w-12 pl-2"
			placeholder={settings.currency || `€`}
		/>
	</p>

	<p>Expenses</p>
	{#each $expenses_writable as expense}
		<div class="pt-4">
			<p class="text-[#767dc1]">month: {format(expense.month)}</p>
			<p class="text-[#ef2572]">
				Total {expense.expenses
					.reduce((a, b) => a + b.expenses.reduce((a, b) => a + b.amount, 0), 0)
					.toLocaleString()}{currency}
			</p>
			{#each expense.expenses as day}
				<div class="pt-4">
					<p class="text-[#767dc1]">day: {format(day.date)}</p>
					<p class="text-[#ef2572]">
						total: {day.expenses.reduce((a, b) => a + b.amount, 0).toLocaleString()}{currency}
					</p>

					{#each day.expenses as expense}
						<div class="pt-1">
							<p class="text-[#fbfdfe]">
								<i class="text-[#767dc1]">
									{min_to_h(expense.time)}
								</i>
								{expense.amount > 0
									? `got ${expense.amount.toLocaleString()}${currency}`
									: `spent ${(expense.amount * -1).toLocaleString()}${currency}`}
							</p>
						</div>
					{/each}
				</div>
			{/each}
		</div>
	{/each}
	<Add />
	<button type="submit" on:click={add} class=""><p class="text-[#ef2572]">Add</p></button>
	<p>{$error}</p>
</div>
