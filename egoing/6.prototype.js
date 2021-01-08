
//prototype은 함수가 선언될 때, 자동으로 선언되는 속성 객체로, 그 함수가 생성자로 이용되어 만들어진 모든 객체는 그 함수의 prototype을 참조한다. 이를 통해 함수가 생성자로 활용될 때마다 반복적으로 선언문이 실행되지는 않지만 그때 생성된 객체에서 공통적으로 활용 가능한 속성을 선언할 수 있다
function Person(name,age,first){
    this.name = name,
    this.age =age,
    this.first=first,
    this.second=10
}
//prototype 원형 객체에 메소드나 원소를 추가할때 사용
//sum이 안에 있을 경우 Person이 생성될때 마다 sum이 생성이 되어 메모리 낭비가 심해 지고
//sum을 수정 할경우 생성된 Person을 일일이 수정을 해야 하는 번거로움이 있음

Person.prototype.sum = function(){
    return 'prototype : ' + (this.first+this.second+this.third);
}
Person.prototype.third = 10;

let kim= new Person('kim','40',10);
//생성된 객체의 sum을 수정하는 경우
kim.sum  = function(){
    return 'this : ' + (this.first+this.second+this.third);
}
let lee= new Person('lee','32',30);
console.log(kim.sum());
console.log(lee.sum());
 