var number = 26
var count = 1
for (let index = 1; index < number; index++) {
    if (number % index == 0) {
        count++;
    }
}
if (count == 2) {
    console.log("prime number")
       
}else
console.log("Not a prime number")