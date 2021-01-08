let superObj = {superVal:'super'}
let subObj = {subVal:'sub'}
//__proto__ 정규문법은 아님 하지만 다씀 prototypelink
subObj.__proto__ =  superObj;

console.log('subObj.subVal => ',subObj.subVal);
console.log('subObj.superVal => ',subObj.superVal);

subObj.superVal = 'chg';
//디버깅모드 중단점 같음 크롬에서 확인 가능 궁금한 오브젝트 이름을 왓쳐로 검색 가능
//debugger;
console.log('subObj.superVal => ',subObj.superVal);
console.log('superObj.superVal => ',superObj.superVal);

let superObj1 = {superVal:'super'}
//__proto__ 와 같은 의미 아래가 더 정규방식이라고 함
let subObj1 = Object.create(superObj1);

console.log('superObj1.superVal => ',superObj1.superVal);
console.log('subObj1.superVal => ',subObj1.superVal);

let kim = {
    name:'kim',
    first:10,second:20,
    sum: function(){
        return this.first + this.second;
    }
}

let lee = Object.create(kim);
lee.name = 'Lee';
lee.first = 20;
lee.firsts = 30;
lee.second = 50;
lee.avg = function(){
            return (this.firsts+this.second)/2;
        }
// let lee = {
//     name:'Lee',
//     first:20,second:50,
//     avg:function(){
//         return (this.first+this.second)/2;
//     }
// }

lee.__proto__ = kim;

console.log('lee.avg => ',lee.avg());
console.log('lee.sum => ',lee.sum());
