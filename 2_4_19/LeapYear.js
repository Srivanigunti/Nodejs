var year = 2100

if (year % 4 == 0) {
    if (year % 400 == 0) {
        if (year % 100 == 0) {
            console.log(year + " is leap year");
        }else
        console.log(year+" is leap year");
    }else
    console.log(year+" is leap year");
}else
console.log(year+" is not leap year");