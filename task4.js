var n = parseInt(prompt("Calculate the factorial of a typed number!"))
function factorial(n){
    var result = n;
    if(n < 0){
      alert(null);
    }
    if(n === 1 || n === 0){
   alert(1);
    } else {
    while(n >= 2) {
        result = result * (n-1); 
        n--;
    }
    alert(result);
   }
};
factorial(n);