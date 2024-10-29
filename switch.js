 a = 5;

 switch(a){
    case 1 :
        console.log("This Month of January") ;
        break ;
        case 2 :
        console.log("This Month of febraury") ;
        break ;
        case 3 :
        console.log("This Month of March") ;
        break ;
        case 4 :
        console.log("This Month of April") ;
        break ;
        case 5 :
        console.log("This Month of May") ;
        break ;
        case 6 :
        console.log("This Month of June") ;
        break ;
        case 7 :
        console.log("This Month of July") ;
        break ;
        case 8 :
        console.log("This Month of Auguest") ;
        break ;
        case 9 :
        console.log("This Month of september") ;
        break ;
        case 10:
        console.log("This Month of october") ;
        break ;
        case 11:
        console.log("This Month of November") ;
        break ;
        case 12:
        console.log("This Month of December") ;
        break ;
        default :
        console.log("Invalid Input") ;
        break ;
    
 }


  b = ( a == 10||a==11||a==12||a==1||a==2 ) ?  "This is cold Session ": "This Is Hot Session" ;
  console.log(b);