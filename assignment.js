//Feet to Mile Conversion

var mile = feetToMile(20);
console.log(mile.toFixed(5), "Feet");

function feetToMile(feet) {
    if (feet < 0) {
        return "Distance can't be negative";
    } else {
        return feet / 5280;
    }
}

//Wood Calculator

var total = woodCalculator(1, 2, 3);
if (total >= 0) {
    console.log("You have to pay total: ", total, "taka");
} else {
    console.log(total);
}


function woodCalculator(chair, table, bed) {
    if (chair < 0 || table < 0 || bed < 0) {
        return "Please try again.Your input isn't valid";
    }
    return (chair * 1) + (table * 3) + (bed * 5);
}

//Brick Calculator
const brickPerFeet = 1000;
var count1, count2, calculateLowerTen, calculateElevenToTwenty, calculateUpperTwenty;
calculateLowerTen = calculateElevenToTwenty = calculateUpperTwenty = 0;
count1 = count2 = 0;
var totalBrick = brickCalculator(23);
console.log("Total require",totalBrick,"brick");

function brickCalculator(floor) {

    for (var i = 1; i <= floor; i++) {
        if (i <= 10) {
            calculateLowerTen = (i * 15 * brickPerFeet);
        } else if (i >= 11 && i <= 20) {
            count1++;
            calculateElevenToTwenty = (count1 * 12 * brickPerFeet);
        } else if (i > 20) {
            count2++;
            calculateUpperTwenty = (count2 * 10 * brickPerFeet);
        }
    }

    return (calculateLowerTen + calculateElevenToTwenty + calculateUpperTwenty);

}

//Tiny Friend

// var friendsName = ["","","s","", "Khalid", "Sourav","", "Suba", "shafat", "   ", " ", " "];//
var counter = 0;
var friendName = tinyFriend(["","","s","", "Khalid", "Sourav","", "Suba", "shafat", "   ", " ", " "]);
console.log("Tiny name is: ",friendName);

function tinyFriend(names) {
    var validNames = [];

    //remove empty string and push valid strings in new string
    for (var i = 0; i < names.length; i++) {
        var stringValidity = names[i];
        for (var j = 0; j < stringValidity.length; j++) {
            if (stringValidity[j] >= 'A' && stringValidity[j] <= 'Z' || stringValidity[j] >= 'a' && stringValidity[j] <= 'z') {
                counter++;
            }
        }
        if (counter >= 1) {
            validNames.push(stringValidity);
            counter = 0;
        }
    }

    //checking new string is empty or not and calculate the tiny name
    if (validNames == 0) {
        return "Please enter valid name";
    } else {
        var min = validNames[0];
        for (var i = 0; i < validNames.length; i++) {
            if (min.length > validNames[i].length) {
                min = validNames[i];
            }
        }
        return min;
    }

}
