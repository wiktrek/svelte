
<script lang="ts">
interface month {
    name: string;
    number: string;
    days: number;
}
let months: month[] = [
{name: "January",number: "01", days: 31}, 
{name: "February",number: "02", days: 28},  
{name: "March",number: "03", days: 31},  
{name: "April",number: "04", days: 30},  
{name: "May", number: "05",days: 31},
{name: "June",number: "06", days: 30},
{name: "July",number: "07", days: 31},
{name: "August",number: "08", days: 31},
{name: "September",number: "09", days: 30},
{name: "October",number: "10", days: 31},
{name: "November",number: "11",days: 30},
{name: "December",number: "12", days: 31},
];
</script>
<div class="text-3xl w-screen ">
    <div class="mx-auto flex  w-screen flex-col items-center justify-center text-center text-3xl text-[#ef2572]">
    <p>Add</p>
    <select class="rounded-md border-none bg-[#05080a] w-64 p-2" id="select">
        {#each months as month}
            <option value={month.number} class="text-xl border-none">{month.name}</option>
        {/each}
    </select>
    <select class="rounded-md border-none bg-[#05080a] w-64" id="select2">
            <option value={true} class="text-xl border-none">spent</option>
            <option value={false} class="text-xl border-none">made</option>
    </select>
   <input id="day"type="number" class="pl-2 bg-[#05080a] rounded-md m-1 border-none outline-none" placeholder="day"/>
   <input id="expense" type="text" class=" pl-2 bg-[#05080a] rounded-md m-1 border-none outline-none" placeholder="subscriptions"/>
   <p>
   <input id="amount" type="number" class="pl-2 bg-[#05080a] rounded-md m-1 border-none outline-none" placeholder="Amount"/> 
   </p>
</div>
</div>