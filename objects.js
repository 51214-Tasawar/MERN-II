const Info ={
    name :"Person1",
    age : 40  ,
    desination:"employee",
    add:{
        city:"Lahore",
        Provinace :"Punjab",
        Country:"Pakistan"
    }
}
const Obj2 = Info ; // Object also create Shallow Copy Just Like Array 
// console.log(Obj2)
//  Obj2.age = 45;
//  console.log(Obj2)
//  console.log(Info)
 const {name , age , add:{city}} = Obj2// Desturcturing of Object and object with-in Object 
 console.log(`My Name is ${name} and I am ${age} Year Old `)
 console.log(`I am living in ${city} City`)