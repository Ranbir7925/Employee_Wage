const IS_FULL_TIME = 1
const IS_PART_TIME = 2
const WAGE_PER_HOUR = 20
const NUM_OF_WORKING_DAYS = 20 
const MAXIMUM_WORKING_HOURS = 100

day = 0
totalWage = 0
totalWorkingHrs = 0 

employeeDailyWage = []

function checkEmployerrAttendence(){
    return Math.floor(Math.random() * 3)
}

function getEmployeeWorkingHours(){
    var employeeWorkingHours

    switch(checkEmployerrAttendence()){
        case IS_PART_TIME:
            employeeWorkingHours = 4
            break
        case IS_FULL_TIME:
            employeeWorkingHours = 8
            break
        default:
            employeeWorkingHours = 0
            break
    }
    return employeeWorkingHours
}

function calculateEmployeeWage(workHrs){
    return WAGE_PER_HOUR * workHrs
}


while (day< NUM_OF_WORKING_DAYS && totalWorkingHrs <=MAXIMUM_WORKING_HOURS)
{
 workingHours = getEmployeeWorkingHours()
 totalWorkingHrs += workingHours
 dailyWage = calculateEmployeeWage(workingHours)
 employeeDailyWage.push(dailyWage)
 totalWage += dailyWage
 day += 1
}
employeeDailyWage.forEach(function(salary,days){
    console.log(`Day ${days+1} Wage -->${salary}`)
})
console.log(`Total Working hrs of Employee is ${totalWorkingHrs}`)
console.log(`Total Wage of Employee is ${totalWage}`)