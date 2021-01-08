let kim = {name:'kim',first:10,second:20}
let lee = {name:'lee',first:10,second:10}

// lee.__proto__ = kim;

function sum(prefix){
    return prefix +(this.first + this.second);
}

//sum(); = sum.call();
//call의 첫번째 인자값은 this가 될 객체, 두번째 인자는 함수의 파라미터에 대입될 값
//call과 비슷한 기능인 apply가 있다
console.log('sum.call(kim) : ', sum.call(kim, '=> '));
console.log('sum.call(lee) : ', sum.call(lee, ' =: '));

//bind
let kimSum = sum.bind(kim,' ): ');
console.log('kimSum : ' , kimSum());

//call은 실행할때 함수의 this를 원하는 객체로 바꾸는것
//bind는 실행하는 함수의 this를 원하는 객체로 고정을 시키는 새로운 함수를 생성한다.
