var dateOfBirth = "06/02/1996"

var dateArray = dateOfBirth.split("/");
//console.log(dateArray)
var month = dateArray[1]
//console.log(month)
var dateOfBirth1 = new Date();
console.log(dateOfBirth1)
switch (month) {
    case "01":
        month = "January";
        break;
    case "02":
        month = "Febrauary";
        break;
    case "03":
        month = "March";
        break;
    case "04":
        month = "April";
        break;
    case "05":
        month = "May";
        break;
    case "06":
        month = "June";
        break;
    case "07":
        month = "July";
        break;
    case "08":
        month = "August";
        break;
    case "09":
        month = "September";
        break;
    case "10":
        month = "October";
        break;
    case "11":
        month = "November";
        break;
    case "12":
        month = "December";
        break;
}

var updatedMonth = dateArray[0]+"/"+month+"/"+dateArray[2];
console.log(updatedMonth)