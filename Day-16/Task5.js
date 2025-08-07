let name1 = "Angel";
let name2 = "V";

let person = {
    name1: name1,
    name2: name2,
    fullname: function () {
        return this.name1 + " " + this.name2;
    }
};

console.log(person.fullname());
