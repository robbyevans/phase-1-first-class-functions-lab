// Code your solution in this file!
let array=['don','jose','mike','tommy']

const returnFirstTwoDrivers=function(array){
    return ([array[0] , array[1]])
}


const returnLastTwoDrivers=function(array){
    return([array[2],array[3]]);
}
returnLastTwoDrivers(array)

const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(int){
    return(function fareMultiplier(fare){
        return fare *int;
    })
}
const fareDoubler=function(fare){
    return (fare *2);
}

const fareTripler =function(fare){
    return (fare*3)
}

function selectDifferentDrivers(array,command){
    if (command===returnFirstTwoDrivers){
        return(returnFirstTwoDrivers(array));
    }
    else if(command===returnLastTwoDrivers){
        return (returnLastTwoDrivers(array));
    }
}
