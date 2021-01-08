//function Person (){};
//let Person = new function();
//둘다 동일

//javascript의 함수는 객체이기 때문에 property(속성)을 가질수 있다.

function Person(name,first,second){
    this.name = name;
    this.first = first;
    this.second = second;
}

//1. Person이라는 생성자 함수 객체가 생성
// Person
// --------------------
//(property) - prototype (Person의 prototype을 가르키는 property)

//1-1. Person의 prototype 객체가 생성 (Person의 property)
// Person's prototype
// ---------------------
//(property) - constructor (Person을 가르키는 property)

Person.prototype.sum = function(){};

//1-2. Person의 prototype 객체가 생성 (Person의 property)
// Person's prototype
// ---------------------
//(property) - constructor (Person을 가르키는 property)
//- sum

let kim = new Person('kim',10,20);

//2-1. Person이라는 생성자 함수를 사용해 kim이라는 객체를 생성
// kim
// -----------------
// - __proto__ (Person의 prototype을 가르키는 property)
// - name
// - first
// - second

console.log(kim.sum());
//kim 객체의 property에서 sum() Method를 찾지만 없으면 __proto__가 가르치는 Person's prototype 객체에 sum()이라는 Method를 찾는다.
//또 없으면 Person's prototype의 __proto__가 가르치는 객체에서 sum()이라는 Method를 찾게 된다.



