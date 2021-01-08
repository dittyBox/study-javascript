// let kim={
//     name:'kim',
//     age:'40',
//     first:10,
//     second:20,
//     sum:function(){
//         return this.first+this.second;
//     }
// }

// let lee={
//     name:'lee',
//     age:'23',
//     first:20,
//     second:30,
//     sum:function(){
//         return this.first+this.second;
//     }
// }

// console.log('lee.sum() : ', lee.sum());
// console.log('kim.sum() : ', kim.sum());


function Person(name,age,first){
    this.name = name,
    this.age =age,
    this.first=first,
    this.second=10,
    this.third=10,
    this.sum=function(){
        return this.first+this.second+this.third;
    }
}


//함수에 new가 붙으면 생성자가 된다 constructor
//constructor function을 만들면 여러 작업 없이 간단하게 지정 가능
//주소록 같은 그러고 보면 DB에서 이미 필드값이 정해져 있는 거에 하나의 행을 채우는 행위와 같아보임
let kim= new Person('kim','40',10);

let lee= new Person('lee','32',30);

console.log(kim.sum());

console.log(lee.sum());
