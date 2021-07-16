function eligibility() {
  let date = prompt('Enter your Date Of Birth dd-mm-yyyy:');
  date = date.split('-');
  let year = parseInt(date[2]);
  let day= parseInt(date[0]);
  let month = parseInt(date[1]);

  let today = new Date();
  let currentDay = today.getDate();
  let currentMonth = today.getMonth() + 1;
  let currentYear = today.getFullYear();
  
  let age = currentYear - year;

  

if(age === 18 && currentMonth < month) {
  return 'You are not Eligible to vote.';
}else if (age === 18 && day > currentDay) {
  return 'You are not Eligible to vote.';
} else if(age < 18) {
  return 'You are not eligible to vote.';
}
else{
return 'You are eligible to vote.';

}
}
document.write(eligibility());












