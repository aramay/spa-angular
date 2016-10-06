function Person() {
    this.name = "angular";

    this.describe = function () {
        console.log("this is ", this);
        console.log(this.name +" "+ "is awesome .. ");
    };
}


var test = new Person();

test.describe();

var describe = test.describe;
describe();

describe.call(test);
