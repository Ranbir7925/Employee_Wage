const IS_PRESENT = 1;

function checkEmployerrAttendence(){
    var attendaceStatus = Math.floor(Math.random() * 2);

    if(attendaceStatus == IS_PRESENT)
    console.log("Employee is PRESENT..!!")
    else
    console.log("Employee is ABSENT...!!")
}

checkEmployerrAttendence();
