const temperatures = [3,-2,-6,-1,'error',9, 13, 17, 15, 14, 9, 5];


const calcTempAmplitude = function (t1,t2) {

    const temps = t1.concat(t2)    
    let max = temps[0];
    let min = temps[0];
    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        if(typeof curTemp !== 'number') continue;
        if (curTemp > max) max =curTemp;
        if (curTemp < min) min =curTemp;
    }
    console.log(max, min);
    return max - min;
};
const amplitude = calcTempAmplitude([3,5,1],[9,0,5])
console.log(amplitude)
// const array = [1, 2, 3, 4, 5];
// const maxValue = Math.max(...array);
// console.log(maxValue); 
