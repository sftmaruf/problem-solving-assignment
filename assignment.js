//Feet to Mile Conversion

var mile = feetToMile(-1);
if (mile < 0) {
    console.log(mile);
} else {
    console.log(mile, "Feet");
}

function feetToMile(feet) {
    if (feet < 0) {
        return "Distance can't be negative";
    } else {
        var measure = feet / 5280;
        return measure.toFixed(3);
    }
}

//Wood Calculator

var total = woodCalculator(1, 2, 0);
if (total >= 0) {
    console.log("You require total", total, "cubic feet wood");
} else {
    console.log(total);
}


function woodCalculator(amountChair, amountTable, amountBed) {
    if (amountChair < 0 || amountTable < 0 || amountBed < 0) {
        return "Please try again.Your input isn't valid";
    }
    return (amountChair * 1) + (amountTable * 3) + (amountBed * 5);
}

//Brick Calculator
const brickPerFeet = 1000;
var count1, count2, calculateLowerTen, calculateElevenToTwenty, calculateUpperTwenty;
calculateLowerTen = calculateElevenToTwenty = calculateUpperTwenty = 0;
count1 = count2 = 0;
var totalBrick = brickCalculator(20);

if (totalBrick > 0) {
    console.log("Total required", totalBrick, "brick");
} else {
    console.log(totalBrick);
}


function brickCalculator(floor) {

    if (floor <= 0) {
        return "You don't need any brick";
    } else {
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


}

//Tiny Friend

var counter = 0;
var friendsName = tinyFriend(["", "", "s", "", "Khalid", "Sourav", "", "Suba", "shafat", "   ", " ", " "]);
console.log("Tiny name is: ", friendsName);

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
