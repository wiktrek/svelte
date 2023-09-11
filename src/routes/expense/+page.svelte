<!-- expense tracker -->



<script lang="ts">
interface Expense {
amount: number;
date: string;
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
            date: "11"
        }]
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
</script>
<div>
<p>Expenses</p>
{#each expenses as expense}
    <p>month: {expense.month}</p>
    {#each expense.expenses as day}
    <p>day: {day.date}</p>
        {#each day.expenses as expense}
        <p>amount spent: {expense.amount}</p>
        {/each}
    {/each}
{/each}
</div>