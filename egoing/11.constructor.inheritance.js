//7.class.js와 비교

function Person(name,first,second){
    this.name = name;
    this.first = first;
    this.second = second;
}

Person.prototype.sum = function(){
    return this.first + this.second;
}

function PersonPlus(name,first,second,third){
    Person.call(this,name,first,second);
    this.third = third;
}

//PersonPlus.prototype.__proto__ = Person.prototype;
//위와 아래 두개는 같은 의미
PersonPlus.prototype = Object.create(Person.prototype)
//PersonPlus.prototype.constructor는 생성자를 가르킴
PersonPlus.prototype.constructor = PersonPlus;

PersonPlus.prototype.avg = function (){
    return (this.first + this.second + this.third)/3;
}

let kim= new PersonPlus('kim',40,10,20);

console.log(kim.sum());
console.log(kim.avg());
console.log(kim.constructor)
