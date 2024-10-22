const Empolyees =[
    { id : 110, name :"Person-1" ,Position:"Senior-HR",Department :"HR-M", Salary : 50000},
    { id : 12 , name :"Person-2" ,Position:"Developer",Department :"Development", Salary : 90000},
    { id : 14, name :"Person-3" ,Position:"Team Lead",Department :"Development", Salary : 50000},
]
Info=([{name , Position}])=>{
 for(i=0; i<Empolyees.length; i++)
 {
    console.log(`Employees Name is -> ${Empolyees[i].name} and his position is -> ${Empolyees[i].Position}`)
 }
}
Info(Empolyees)
