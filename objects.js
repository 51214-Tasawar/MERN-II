// //const Empolyees =[
//     { id : 110, name :"Person-1" ,Position:"Senior-HR",Department :"HR-M", Salary : 50000},
//     { id : 12 , name :"Person-2" ,Position:"Developer",Department :"Development", Salary : 90000},
//     { id : 14, name :"Person-3" ,Position:"Team Lead",Department :"Development", Salary : 50000},
//] 
// Info=([{name , Position}])=>{ // Task-1 Completet You are given an array of employee objects. Each employee object has the following properties: id, name, position, salary, and department. Your task is to write a function filterEmployeeInfo that returns a new array of employee objects but only with name and position fields for each employee. Use object destructuring and the rest operato
//  for(i=0; i<Empolyees.length; i++)
//  {
//     console.log(`Employees Name is -> ${Empolyees[i].name} and his position is -> ${Empolyees[i].Position}`)
//  }
// }
// Info(Empolyees)
// console.log(Empolyees[2].Position)
// const usersetting ={   // Problem 2  given two objects: defaultSettings and userSettings.Write a function mergeSettings that merges userSettings into defaultSettings using the spread operator. If the same property exists in both objects, the value from userSettings should overwrite the one in defaultSettings.
//     theme : "light",
//     Notification:true ,
//     autoSave:false ,
// }
// defaultsetting = {
//     theme : "dark" ,
//     autoSave:true ,
//     Notification:false ,
//     role :'Admin'
// } 
// mergeObjects=(defaultsetting , usersetting)=>{
//   Object.assign(defaultsetting , usersetting)  //  Using Assigning Objects
// const merge = {...defaultsetting , ...usersetting} // Using Spread Operator
// console.log(merge)
//  }
//  // console.log(mergeObjects( defaultsetting , usersetting ))
//   const UserDetail ={
//     id : 110 ,
//     name :"Person1" ,
//     email:"abc@gmail.com",
//     theme: "dark" ,
//     notification: true ,
//     Language:"English"
//   }

// //   UserInfo=({id , name , email})=>{
// //    console.log(`The ${name} Has the Id ${id} . And His Contact Email is ${email}`)
// //   }
// //   console.log(UserInfo(UserDetail))
// const {id , name , email ,...preference}=UserDetail ;
// console.log(preference)

// {
//     const Product=[
//     {id:1 , name :"Laptop", Category:"Eletronic" , Color:"Yellow" , price :250000},
//     {id:2 , name :"phone", Category:"Eletronic" , Color:"Diamond" , price :150000},
//     {id:3 , name :"Head-phone", Category:"Eletronic" , Color:"Black" , price :2500},
//     {id:14 , name :"bag", Category:"clothing" , Color:"Black" , price :4000},
//     {id:5, name :"Trouser-shrit", Category:"Clothing" , Color:"Brown" , price :5000},
// ]

// function info(Product , id , newfeilds){
//    return Product.map((value)=>{
//     if(value.id == id)
//         return {...value , ...newfeilds}
//     return value ;
//    })
// }
// console.log(info(Product , 5  , {id:12,name:"Air-bag" , color:"red"}))
// }
// {
//     const order=[
//     {
//         OrderId:1 , CustomerName:"Person-1" , Amount : 2000 , Product:[
//      {id:101 , product:"Head-Phone" , price : 1500},
//      {id:102 , product:"Mouse" , price:500}
//     ]
// } ,
// {
//     OrderId:2 , CustomerName : "Person-2" , Amount : 5000 , Product:[
//         {id:103 , product:"Trouser-Shirt", price:5000}
//     ] 
// }
// ]
// info=(order)=>{
// return order.map((value)=>{
// console.log(`OrderId Is -> ${value.OrderId} And Customer Name is ${value.CustomerName} and ${value.Product.price}`)
// })
// }
// console.log(info(order))
// }
person1 = {name :"Person_1", age :30 , City:"Lahore"  }
person2 = {name :"Person_2", age :25 , City :"MuzaffarGarh"}

Swap=(person1 , person2)=>{
   console.log(person1.name)
}
Swap(person1 , person2);