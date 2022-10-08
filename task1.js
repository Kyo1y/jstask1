for (var i = 0; i < 10; i++) {
    setTimeout(function() {
      console.log(i);
    })
  }; 
  // it will console log 10 because setTimeout is an async function so i counts to 10 before setTimeout makes it to the queue and console logs the result of the function

