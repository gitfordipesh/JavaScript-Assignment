function calculateDogAge(puppysAge,conversionRate){
    //1 human Year = 7 Dog Years. for eg.
    var dogAge = puppysAge*conversionRate;
    return dogAge;
}

document.write("Your doggie is "+calculateDogAge(10,7)+" years old in dog years!");