
//let name = prompt("What is your name?", " ");
//let time= prompt ("Time of the day(morning, afternoon, evening", " ");

let name= "Trishia";
let time= "afternoon";

function Greet(){
    if (time== "morning"){
        console.log(`Good morning ${name}`);
    }
        else if (time== "afternoon"){
        console.log(`Good afternoon ${name}`);
    }
        else {
        console.log(`Good evening ${name}`);
    }
    }
Greet();
