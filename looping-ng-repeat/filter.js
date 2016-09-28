var list = [1,2,3,4,12, 5, 8, 130, 44];

console.log("list =>", list);

var filteredArray = list.filter(function (value) {

    return value > 5;

});

console.log(filteredArray);
