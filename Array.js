const arr = [1 , undefined , null , "Person1" , "Aquwa"] ;

const [a ,b,...e]=arr // DESTRUCTURING OF ARRAY
console.log(e) ;
// arr.sort(); // sorting method
arr.shift();  // remove the frist value of array
console.log(arr);
arr.slice()

for(value of arr){
    console.log(value);
    
}