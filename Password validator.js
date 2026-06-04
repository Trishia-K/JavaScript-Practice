let password = "Trishia@123";
//let password= prompt("Enter Password: ",'');
let issues= [];
//console.log(`${password}`);
//hasDigit= /\d/

//password length
if (password.length < 8){
    issues.push("Password is too short.");
} if (!/\d/.test (password)){
    issues.push("Password must contain atleast one number.");
} if (!/[A-Z]/.test (password)){
    issues.push ("Password must have atleast uppercase letter.")
} if ( !/[!@#$%]/.test(password)){
    issues.push ("Password must have a special character");
} 
if(issues.length==0){
    console.log("Password is okay")
} else{
    for(let i=0; i<issues.length; i++){
        console.log(`${issues[i]}`);
    }
}

