const max_age = 75;
function calculateSupply(age,amtPerDay){
    var rem = max_age-age;
    var amt = rem * (amtPerDay*366);
    document.write("You will need "+amt+" to last you until the ripe old age of "+max_age+"<br/>");
}
var current_age = prompt("Enter Your age in years :");
var amount_supply_perDay = prompt("Enter amount needed per day :");
calculateSupply(current_age,amount_supply_perDay);