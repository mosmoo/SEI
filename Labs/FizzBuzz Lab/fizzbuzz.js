//In Javascript as psuedocode almost

for (i = 1; i<= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("fizzBuzz")
    }
    if (i % 3 === 0){
        console.log("fizz")
    }
    if(i % 5 === 0){
        console.log("buzz")
    } else {
        console.log(i)
    }
}