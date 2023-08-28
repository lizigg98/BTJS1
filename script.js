let studentGrade =[10, 15, 20, 25, 30];
const sum = studentGrade.reduce(function (previousValue, currentValue, index, array) 
{console.log(11, previousValue, currentValue);
return previousValue + currentValue;}, 0);
const avg = sum / studentGrade.length;
if(0<avg && avg <= 70){
    console.log('D grade');
}
else if(71 <= avg <= 79){
    console.log('C grade');
}
else if(81 <= avg <= 89){
    console.log('B grade');
}
else if(91 <= avg <= 100){
    console.log('A grade');
}
else {
    console.log('NaN');
}
