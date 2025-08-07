let name1 = "Angel";
let name2 = "V";

function fn(name1, name2) {
    return name1 + " " + name2;
}

let person = {
    name1: name1,
    name2: name2,
    fullname: () => {
        return name1 + " " + name2;
    }
};

console.log(person.fullname());
