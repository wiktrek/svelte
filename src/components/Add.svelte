
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
    <p class="absolute top-0 text-xl right-4">Currency 
    <input type="text" class="bg-[#05080a] rounded-md m-1 border-none outline-none w-12 pl-2" placeholder={40}/> 
    </p>
    
    <div class="mx-auto flex  w-screen flex-col items-center justify-center text-center text-3xl text-[#ef2572]">
    <p>Add</p>
    <select class="rounded-md border-none bg-[#05080a]" id="select">
        {#each months as month}
            <option value={month.number} class="text-xl border-none">{month.name}</option>
        {/each}
    </select>
   <input type="text" class=" pl-2 bg-[#05080a] rounded-md m-1 border-none outline-none" placeholder="Subscriptions"/>
   <input type="number" class="pl-2 bg-[#05080a] rounded-md m-1 border-none outline-none" placeholder={40}/> 
    <input type="number" class="pl-2 bg-[#05080a] rounded-md m-1 border-none outline-none" placeholder={11}/>

</div>
</div>