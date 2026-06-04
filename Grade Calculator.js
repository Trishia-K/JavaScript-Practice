const marks= [60, 70, 88, 90, 69];
const subjects= ['Math', 'English', 'Physics', 'Biology', 'Econ']
let total=0;

for (const mark of marks){
    total +=mark;
}
let average= total/marks.length;

function Grade(){
if (average>=80 && average<=100){
    console.log ("First Class");
} else if (average>=70 && average<=79){
    console.log ("Second upper");
} else if (average>=60 && average<=69){
    console.log ("second lower");
} else if (average>=50 && average<=59){
    console.log ("Pass");
} else if (average< 50){
    console.log ("Fail");
} else{
    console.log ("No Grade");
}
}

console.log("----Student Report----");
for ( let i=0; i<marks.length; i++){
    console.log(`${subjects[i]}: ${marks[i]}`)}
    console.log(`Total marks= ${total}`);
    console.log (`Average= ${average}`);
    Grade();

