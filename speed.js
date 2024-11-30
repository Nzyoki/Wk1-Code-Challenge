function speedDetector(speed) {
    const sLimit = 70;
    const addY = 5;
    let points = 0;
    let demeritPointsMax = 12;

    if (speed <= sLimit) {
        return "OK";
    }
    for (let i = sLimit + addY; i <= speed; i += addY) {
        points++;
    }
    if (points > demeritPointsMax) {
        return "License suspended";
    }
    else {
        return `Points : ${points}`
    }
}
console.log(speedDetector(80))
