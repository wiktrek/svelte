<!-- expense tracker -->



<script lang="ts">
// time = minutes
interface Expense {
amount: number;
currency: string;
time: number;
}

interface Day {
date: string;
expenses: Expense[];    
}
interface Month {
    expenses: Day[]
    month: string;
}
let expenses: Month[] = []
let example: Month = {
    month: "09",
    expenses: [{
        date: "11",
        expenses: [{
            amount: 10,
            currency: "zł",
            time: 720
        },
        { amount: 100, currency: "zł", time: 721}
    ]
    }]
}
expenses.push(example)
if (typeof localStorage !== `undefined`) {
    if (localStorage.getItem("expenses") !== null) {
        expenses = JSON.parse(localStorage.getItem("expenses") || "[]");
    }
}
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
</script>
<div>
<p>Expenses</p>
{#each expenses as expense}
    <p>month: {expense.month}</p>
    {#each expense.expenses as day}
    <p>day: {day.date}</p>
        {#each day.expenses as expense}
        
        <p>{min_to_h(expense.time)} amount spent: {expense.amount}{expense.currency}</p>
        {/each}
    {/each}
{/each}
</div>