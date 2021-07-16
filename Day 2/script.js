function multiplicationTable(n) {
  
    for (let i = 1; i <= 20; i++) {
        if(n % 3 === 0 ||n % 5 === 0||n % 7 === 0) {
            result = i * n;
            document.write(`${n} * ${i} = ${result}`);
            document.write('<br>')
          }else {
            document.write( n + ' not a multiple');
            break;
          }
       
        }
    }
    
    multiplicationTable(3)













    
 