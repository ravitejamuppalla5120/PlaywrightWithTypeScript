

// let nameValue1:String="RaviTeja";
// console.log(nameValue1);

// let nameValue2:Number=3
// console.log(nameValue2);

// let nameValue3:Boolean=true
// console.log(nameValue3);

// let nameValue4:null=null
// console.log(nameValue4);

// let nameValue5:undefined=undefined
// console.log(nameValue5);

// let nameValue6:any=111222222
// console.log(nameValue6);

// let nameValue7:never;
// // console.log(nameValue7);

// let nameValue8:String=JSON.parse("55");
// console.log(nameValue8);

// let nameValue9:unknown="122454544"
// console.log(nameValue9);

// let nameValue10:unknown=1224
// console.log(nameValue10);

// let nameValue11 =<Number> 90
// console.log(nameValue11);

// let arrayValue1:String[]=["Sunil","Ravi","Teja"]
// console.log(arrayValue1);

// let arrayValue2:Number[]=[1,5,3,2]
// console.log(arrayValue2);

// let arrayValue3:[Number,String,Boolean]=[1,"Ravi",true]
// console.log(arrayValue3);



// const car:{type:String,model:String,year:Number}={
//     type:"KIA",
//     model:"Carniwala",
//     year:1998
// }

// console.log(car.type);


// const car2:{type:String,model?:String,year?:Number}={
//     type:"KIA",
// }
// car2.year=1223


// console.log(car2.model);
// console.log(car2.year);


// const nameAgeMap:{ [index : string] :number}={}
// nameAgeMap["Sample"]=190




// enum caridationalDirections{

//     north,
//     south,
//     east,
//     west
// }

// console.log(caridationalDirections.west);

// enum caridationalDirections{

//     north="Sample1",
//     south="Sample2",
//     east="Sample3",
//     west="Sample4"
// }

// console.log(caridationalDirections.west);



// type CarType=String;
// type CarModel=String;
// type CarYear=Number;

// type Car={
//     type:CarType,
//     model:CarModel,
//     year:CarYear
// }

// const carYear : CarYear=1994
// const carModel:CarModel="124"
// const carType:CarType="Pulser"
// let car:Car={
//     type:carType,
//     model:carModel,
//     year:carYear

// }



// interface Recatangle{
//     height:Number,
//     width:Number
// }
// interface colouredRecatangle extends Recatangle{
//     colour:String
// }

// let rectangle:Recatangle={
//     height:188,
//     width:123
// }


// let code: Number|String|Boolean=123;


// function gettime():Date{
//     return new Date();
// }

// console.log(gettime());

// function gettime():void{
//    console.log("Returning the Time");
   
// }

// console.log(gettime());

// function mutipley(a:number,b:number,c:number=10):number{
//     return (a*b*c);
// }
// console.log(mutipley(10,4));

// function divident({divident,divisor}:{divident:number,divisor:number}) {
//     return divident/divisor;
// }


// class Person{

// //    private name:String="";
//     // protected name:String="";
//     readonly name:String;
//     public constructor(name:String){
//         this.name=name

//     }


//     getterName(){
//         this.name
//     }
// }

// class Employee extends Person {
//     constructor(name:String,public jobTitle:String){
//         super(name);

//     }

//     getterEmpolyee(){
//         console.log(`${this.name} is a ${this.jobTitle}`);
        
//     }
// }

// let person=new Person("Smaple");
// // person.name="Ravi";
// // console.log(person.name);

// let employee=new Employee("Muppalla","Developer")
// console.log(employee.getterEmpolyee());



// function num(par:Number){
// return par;
// }
// function stringNumb(par:String){
//     return par
// } 


// function finalfun<T>(num:T):T{
//     return num;
// }

// console.log(finalfun<Number>(10));
// console.log(finalfun<String>("Ravi"));


// const  Person={
//     name:"Alice",
//     age:25,
//     address:"Soemthing"

// }

// function getProperty<T ,V extends keyof T>(obj:T,key:V):T[V]{
//     return obj[key]
// }

// console.log(getProperty(Person,"name"));


interface User{

    name:String,
    age:number,
    email:string,

}
// let user1 :User={
//     name:"Ravi"
// }

let user :Partial<User>={
    name:"Ravi"
}

// interface Person{
//     name?:String,
//     age?:number
// }
// const person:Required<Person>={
//     name:"Ravi"
// }

// const person:Required<Person>={
//     name:"Ravi",
//     age:11
// }

// interface  Car{
//     make:String,
//     model:String
// }
// const mycar:Readonly<Car>={
//     make:"Sample",
//     model:"1991"
// }

// mycar.make="Something"


interface Product{
    id:Number,
    name:String,
    price:Number
}

const preview:Pick<Product,"id"|"name">={
    id:1981,
    name:"Ravi"

}
const preview1:Omit<Product,"id">={
    name:"Ravi",
    price:198

}