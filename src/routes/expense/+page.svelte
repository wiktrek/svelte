<!-- expense tracker -->
<!-- 
    sort by time, date, month
    add expense
    ui
    select currency
-->


<script lang="ts">
interface Settings {
    currency: string;
}
// time = minutes
interface Expense {
amount: number;
time: number;
}

interface Day {
date: number;
expenses: Expense[];    
}
interface Month {
    expenses: Day[]
    month: number;
}
let settings: Settings = {
    currency: "zł" 
}
let expenses: Month[] = []
let example: Month = {
    month: 9,
    expenses: [{
        date: 11,
        expenses: [{
            amount: -10,
            time: 720
        },
        { amount: -100, time: 721},
        { amount: 90, time: 724}
    ]
    }]
}
expenses.push(example)
if (typeof localStorage !== `undefined`) {
    if (localStorage.getItem("expenses") !== null) {
        expenses = JSON.parse(localStorage.getItem("expenses") || "[]");
    }
}
let currency = settings.currency
function save() {
let json = JSON.stringify(expenses);
localStorage.setItem("expenses", json)
}
function min_to_h(m: number): string{
let result: string = "";
let h: number = Number((m / 60).toFixed())
let minutes = m - (h * 60)
if (minutes < 10) {
result = `${h}:0${minutes}`
return result
}
result = `${h}:${minutes}`
return result
}
function format(a: number): string {
if (a < 10) {
    return `0${a}`
}
return `${a}`
}
</script>
<div class="text-center justify-center items-center text-3xl">
<p>Expenses</p>
{#each expenses as expense}
    <p>month: {format(expense.month)}</p>
    {#each expense.expenses as day}
    <p>day: {format(day.date)}</p>
    <p>Total: {day.expenses.reduce((a, b) => a + b.amount, 0)}{currency}</p>    
    {#each day.expenses as expense}
        
        <p>{min_to_h(expense.time)} {(expense.amount > 0) ? `got`: `spent`} {expense.amount.toFixed().replace("-", "")}{currency}</p>
        {/each}
    {/each}
{/each}
</div>