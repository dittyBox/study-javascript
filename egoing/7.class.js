class Person{
    //constructor 객체가 생성될때 먼저 시작하는 함수
    constructor(name,age,first){
        this.name=name;
        this.age = age;
        this.first = first;
    }
    sum(){
        return (this.first);
    }
}
//class도 prototype을 사용하여 Method를 추가 가능
//extends 확장한다 즉 PersonPlus는 Person을 상속하고 추가 부분을 추가한 class이다. 
// class PersonPlus extends Person{
//     avg(){
//         return (this.first+this.second)/2;
//     }
// }

class PersonPlus extends Person{
    constructor(name,age,first,second){
        //super() 상속받은 부모 클레스의 생성자를 가져온다.
        super(name,age,first)
        this.second=second;
    }
    sum(){
        //super.xxx 상속받는 부모 클레스의 메소드임 메소드 뒤에 () 붙어야지 return값을 가져옴
        
        return super.sum()+this.second;
    }
    avg(){
        return (this.first+this.second)/2;
    }
}

let kim= new PersonPlus('kim',40,10,20);
console.log(kim.sum());
console.log(kim.avg());

