const employeeBonus = () =>{
  let yearOfBirth = prompt('What is your year of birth?');
  let year = parseInt(yearOfBirth);
  
  
  let currentSalary = parseInt(prompt('What is your current salary?'));
  let salary=parseInt(currentSalary);


  if(!year || !salary){
    return 'You are not entitled to a bonus';
  }


let age = 2021 - year;
let bonus;
  

    if (age >= 18 && age <= 20) {
       bonus = ((5 / 100) * salary ) + salary;
      
    } else if (age >= 21 && age <= 30) {
       bonus = ((10 / 100) * salary ) + salary;
    } else if (age >= 31 && age <= 50) {
       bonus = ((20 / 100) * salary ) + salary;
    } else {
      return 'Sorry, you do not seem to be part of the payroll.';
    }
    return 'Your bonus is '+  bonus;
  }
     
alert(employeeBonus());

   
  
