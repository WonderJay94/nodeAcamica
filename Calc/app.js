const fs = require('fs');
const calc = require('./calculator');

fs.open('log.txt','a', function (err) {
    if (err) throw err;
    console.log("File created or updated");
});

function calculate(num1, num2, op){
    let sign = ''; 
    let ans = '';
    switch(op) {
        case 'add':
          sign = '+';
          ans = calc.add(num1, num2);
          break;
        case 'subs':
          sign = '-';
          ans = calc.subs(num1, num2);
          break;
        case 'multi':
          sign = 'x';
          ans = calc.multi(num1, num2);
          break;
        case 'divide':
            sign = '/';
            ans = calc.divide(num1, num2);
            break;
        default:
          break;
      }
    let log = num1 + " " + sign + " " + num2 + " = " + ans + '\n';

    fs.appendFile('log.txt',log, function(e){
        if(e){
            console.log('failed');
        } else{
            console.log('eureka');
        }
    }) 
}
calculate(5,3,'add');
calculate(10,4,'subs');
calculate(5,9,'multi');
calculate(12,6,'divide');