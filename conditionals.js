TotalNum = 57 + 97 + 599 + 99 ;
percentage = TotalNum / 400 * 100;
if(percentage >= 85 && percentage<=100){
    a = "Passed"
    console.log(a)
}
else{
    a = "Try Again"
    console.log(a)
}
switch(a){
case "Passed" :
    console.log("Your Eligible for this Job");
    break;
    case "Try Again":
        console.log("Please Try Again Next Time");
        break ;
        default :
        console.log("Invalid Input");
        break;
}
const b= a>= 85 ?  "Please Fill out this Form":  "Your not able not able fill out this form";
 console.log(b)
