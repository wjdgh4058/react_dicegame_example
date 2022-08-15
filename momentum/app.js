let age = parseInt(prompt("How old are you?"));


if(isNaN(age || age <0)){
    console.log('Please write a real positive number')
}
else if(age < 18){
    console.log(`your age is ${age}`);
    console.log('you are too young.')
} else if(age >= 18 && age <= 50){
    console.log(`your age is ${age}`);
    console.log('you can drick!');
}
else{
    console.log(`your age is ${age}`);
    console.log('Thank you for writing your age')
    console.log("you can't drick!");
}

