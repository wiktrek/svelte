<!-- expense tracker -->
<!-- 
    sort by time, date, month
    add expense
    ui
    select currency
-->


<script lang="ts">
import Add from "../../components/Add.svelte"
import { format, sort_month, min_to_h} from "$lib/expense"
import type { Settings, Month} from "$lib/expense"
let settings: Settings = {
    currency: "$" 
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
},
{
        date: 12,
        expenses: [{
            amount: 200,
            time: 500
        },
        { amount: -10, time: 243},
        { amount: 10, time: 432}
    ]
}
]    
}
expenses.push(example)
expenses == sort_month(expenses)


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
</script>
<div class="text-center justify-center items-center text-3xl">
<p>Expenses</p>
{#each expenses as expense}
<div class="pt-4">
<p class="text-[#767dc1]">month: {format(expense.month)}</p>
    <p class="text-[#ef2572]">Total {expense.expenses.reduce((a, b) => a + b.expenses.reduce((a, b) => a + b.amount, 0), 0)}{currency}</p>
    {#each expense.expenses as day}
    <div class="pt-4">
        <p class="text-[#767dc1]">day: {format(day.date)}</p>
        <p class="text-[#ef2572]">total: {day.expenses.reduce((a, b) => a + b.amount, 0)}{currency}</p>
        
    {#each day.expenses as expense}
        <div class="pt-1">
            <p class="text-[#fbfdfe]">
                <i class="text-[#767dc1]">
                {min_to_h(expense.time)} 
                </i>
                {(expense.amount > 0) ? `got ${expense.amount}${currency}`: `spent ${expense.amount * -1}${currency}`} 
            </p>
        </div>
        
        {/each}
    </div>
    {/each}
    </div>
{/each}
<Add />
</div>