prompt("Вводите все числа в одинаком формате (00) (000) (0000)...type ok to skip")
var number1=prompt("Введите первое число");
var number2=prompt("Введите второе число");
var number3=prompt("Введите третье число");
 
var Max =number1 ;
if (number2 > number1) Max = number2;
if (number3 > number1) Max = number3;
 
alert(Max);