const school = "Goodimari b.L High School";

console.log(school);

const subject = "Mathematics";
const book = "mathematics ";

if(subject.trim().toLocaleLowerCase() === book.trim().toLocaleLowerCase()){
    console.log("Same Subject");
} else {
    console.log("Different Subject");
}
