/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */


function createEmployeeRecord(employeeInfoArray){
    return {
        'firstName' : employeeInfoArray[0],
        'familyName': employeeInfoArray[1],
        'title': employeeInfoArray[2],
        'payPerHour': employeeInfoArray[3],
        'timeInEvents': [],
        'timeOutEvents': []
    }
}

function createEmployeeRecords(array) {
    const employeeRecords = array.map(createEmployeeRecord)
    return employeeRecords;
}

function createTimeInEvent(workDay){
    const newInput = {
        type: 'TimeIn',
        hour: parseInt(workDay.slice(11,13)+"00"),
        date: workDay.slice(0,10)
    }
    this.timeInEvents.push(newInput)
    return this;
}

function createTimeOutEvent(workDay){
    const newInput = {
        type: 'TimeOut',
        hour: parseInt(workDay.slice(11,13)+"00"),
        date: workDay.slice(0,10)
    }
    this.timeOutEvents.push(newInput)
    return this;
}


function hoursWorkedOnDate(workDay){
    for(let day in this.timeInEvents){
        if(this.timeInEvents[day].date == workDay){
            return ((this.timeOutEvents[day].hour - this.timeInEvents[day].hour) / 100)
        }
    }
}


function wagesEarnedOnDate(workDay){
    return hoursWorkedOnDate.call(this, workDay) * this.payPerHour
}

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function findEmployeeByFirstName(srcArray, name){
    for(let item in srcArray){
        if(srcArray[item].firstName === name){
            return srcArray[item]
        } 
    }
}

function calculatePayroll(array){
    let totalPayment = 0
    for(let item of array){
        totalPayment += allWagesFor.call(item)
        console.log('totalPayment', totalPayment)
    }
    console.log('totalPayment', totalPayment)
    return totalPayment
}

//intro to context lab
/* function calculatePayroll(array){
    let totalPayroll = 0;  

    for(let person of array){
        console.log(person)
        totalPayroll += allWagesFor(person)
    } 

    return totalPayroll 
}
*/