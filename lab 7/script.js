
// Task 02
function sumTo(n){
    //Task 03
    if (n > 0){
        var sum = 0;
        for(var i = 1; i <= n; ++i)
        {
            sum += i;
        }
        return sum;
    }
    console.log("Invalid parameter " + n);
    return NaN;
}

console.log(sumTo(3));
console.log(sumTo(10));
console.log(sumTo(15));
console.log(sumTo(0));
console.log(sumTo(-5));


var employee = {
    firstName: "Ion",
    lastName: "Popescu",
    jobTitle: "engineer",
    department: "EA",
    birthYear: 1985,
    //Task 05
    getFullName: function(){
        return employee.firstName + " " + employee.lastName;
    }
}
//Task 04
// alert(employee.firstName + " " + employee.lastName + " is an " + employee.jobTitle + " in our " + employee.department + " department ");
//Task 05
alert(employee.getFullName() + " is an " + employee.jobTitle + " in our " + employee.department + " department ");

//Task 06
document.getElementById("h1").innerHTML = "JavaScript Demo";
document.getElementById("p1").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, voluptate?";
document.getElementById("p2").innerHTML = "Lorem ipsum dolor sit amet.";