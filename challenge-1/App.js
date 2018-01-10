const firstName = 'fahmi';
const lastName = 'irfan'
for (let i = 1; i <= 100; i++) {
  if(i%3 === 0 && i%5 === 0) {
    console.log(i + firstName +' ' + lastName);
  }
  else {
    if(i%3 === 0) {
      console.log(i + firstName);
    } 
    if(i%5 === 0) {
      console.log(i + lastName);
    }  
  }
}