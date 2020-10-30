const IS_FULL_TIME = 1
const IS_PART_TIME = 2
const WAGE_PER_HOUR = 20

function checkEmployerrAttendence(){
    var attendaceStatus = Math.floor(Math.random() * 3);
    var employeeWorkingHours

    if(attendaceStatus == IS_FULL_TIME){
        console.log("Employee is FULL TIME..!!")
        employeeWorkingHours = 8
    }
    else if(attendaceStatus == IS_PART_TIME){
        console.log("Employee is PART TIME..!!")
        employeeWorkingHours = 4
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
