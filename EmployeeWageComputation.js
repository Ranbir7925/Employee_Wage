const IS_PRESENT = 1
const WAGE_PER_HOUR = 20

function checkEmployerrAttendence(){
    var attendaceStatus = Math.floor(Math.random() * 2);
    var employeeWorkingHours

    if(attendaceStatus == IS_PRESENT){
        console.log("Employee is PRESENT..!!")
        employeeWorkingHours = 8
    }
    else{
        console.log("Employee is ABSENT...!!")
        employeeWorkingHours = 0
    }
    return employeeWorkingHours
}

function calculateEmployeeWage(workHrs){
    return WAGE_PER_HOUR*workHrs
}

var workingHours = checkEmployerrAttendence()
var dailyWage = calculateEmployeeWage(workingHours)
console.log(`Employee daily wage is ${dailyWage}`)
