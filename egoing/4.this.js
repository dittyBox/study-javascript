//this는 method가 자신이 속해있는 객체를 가르키는 특수한 키워드

// let kim={
//     name:'kim',
//     age:'40',
//     first:10,
//     second:20,
//     sum:function(f,s){
//         return f+s;
//     }
// }

// console.log(kim.sum(kim.first,kim.second));

let kim={
    name:'kim',
    age:'40',
    first:10,
    second:20,
    sum:function(){
        //여기서 this는 kim이다. this.first는 kim.first
        return this.first+this.second;
    }
}

console.log(kim.sum());
