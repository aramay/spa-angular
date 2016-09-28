var list = [1,2,3,4,12, 5, 8, 130, 44];

console.log("list =>", list);

function above5Filter(value) {

    return value > 5;

}

// passing it a call back
var filteredArray = list.filter(above5Filter);

console.log(filteredArray);


// filter for strings
var shoppingList1 = [
"Milk", "Donuts", "Cookies", "Chocolate", "Peanut Butter", "Pepto Bismol", "Pepto Bismol (Chocolate flavor)", "Pepto Bismol (Cookie flavor)"
];

var searchValue = "Bismol";

function containsString(value) {
    // console.log(value);
    return value.indexOf(searchValue) !== -1;
}


var filteredString = shoppingList1.filter(containsString);

console.log(filteredString);
