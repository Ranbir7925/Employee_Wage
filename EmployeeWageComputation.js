const IS_FULL_TIME = 1
const IS_PART_TIME = 2
const WAGE_PER_HOUR = 20
const NUM_OF_WORKING_DAYS = 20 

function checkEmployerrAttendence(){
    var attendaceStatus = Math.floor(Math.random() * 3);
    var employeeWorkingHours

    switch(attendaceStatus){
        case IS_PART_TIME:
            console.log("Employee is PART TIME..!!")
            employeeWorkingHours = 4
            break
        case IS_FULL_TIME:
            console.log("Employee is FULL TIME..!!")
            employeeWorkingHours = 8
            break
        default:
            console.log("Employee is ABSENT...!!")
            employeeWorkingHours = 0
            break
    }
    return employeeWorkingHours
}

function calculateEmployeeWage(workHrs){
    return WAGE_PER_HOUR * workHrs
}

day = 0
totalWage = 0
while (day< NUM_OF_WORKING_DAYS)
{
 workingHours = checkEmployerrAttendence()
 dailyWage = calculateEmployeeWage(workingHours)
 totalWage += dailyWage
 day += 1
}

console.log(`Total Wage of Employee is ${totalWage}`)