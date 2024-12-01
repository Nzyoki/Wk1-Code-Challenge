function speedDetector(speed) {// define a function speedDetector that checks the speed
    // define variables, sLimit to set the speed , addY is the increment for assigning a demerit fo
    const sLimit = 70;
    const addY = 5;//addY is the increment for assigning a demerit point for every 5km/s after 70
    let points = 0; //adds the number of points gained from 0
    let maxDemeritPoints = 12;// maximum number of demerit points before licence is suspended is 12

    if (speed <= sLimit) {
        return "OK";// if speed is 70 or less, return OK
    }
    for (let i = sLimit + addY; i <= speed; i += addY) {
        points++;//loop that increases by 5,every increment of 5 gives 1 extra point
    }
    if (points > maxDemeritPoints) {
        return "License suspended";// if points accumulated is more than 12, return Licence suspended
    }
    else {
        return `Points : ${points}`// if points less than 12, return the points accumulated 
    }
}
console.log(speedDetector(80))
