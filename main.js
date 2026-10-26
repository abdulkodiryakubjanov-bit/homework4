function greet(a) {
    console.log("Привет," + a)
}
greet("Ruslan");
greet("Samir");


function calculateSum (a, b){
    console.log(a + b)
}
calculateSum(5, 3);
calculateSum(10, 20);


function checkAge(a){
    if (a < 18){
        console.log("Доступ запрещён")
    }else{
        console.log("Доступ разрешён")
    }

}

checkAge(16)
checkAge(21)


function checkNumber(a){
    if(a % 2 == 0 ){
        console.log("Чётное число")
    }else{console.log("Нечётное число");
    }
}

checkNumber(8)
checkNumber(5)


function calculator(a, b, operator){
    if(operator === "/" && b == 0){
        console.log('На ноль делить нельзя');  
        return null 
    }
    let result; 
    switch (operator) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    case '/':
      result = a / b;
      break;
    case undefined:
    default:
      console.log('Неизвестная операция');
      return null;
  }
    return result; 

    }







console.log(calculator(10, 5, "+")); // 15

console.log(calculator(10, 5, "-")); // 5

console.log(calculator(10, 5, "*")); // 50

console.log(calculator(10, 5, "/")); // 2


