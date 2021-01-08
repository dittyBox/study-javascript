//수학 Math.PI 파이값 random 렌덤값 floor 나머지 버림
//이미 수학 날짜 문자 등 많은 객체를 만들었음
console.log('Math.PI : ',Math.PI);
//일반적으로 함수 function으로 말하지만 객체 안에 있는 function은 Method라고 말함
console.log('Math.random() : ',Math.random()); //random은 Method
console.log('Math.floor(4.3) : ',Math.floor(4.3));


let MyMath = {
    PI:Math.PI,
    random: function(){
        return Math.random();
    },
    floor:function(vl){
        return Math.floor(vl);
    }
}

console.log("MyMath.PI : ",MyMath.PI);
console.log("MyMath.random() : ",MyMath.random());
console.log("MyMath.floor(3.5) : ",MyMath.floor(3.5));

//위의 객체로 만든 부분을 객체로 만들지 않고 각자 만들기
//접두사를 써서 변수 이름 충돌 피하기
let MyMath_PI = Math.PI;

function MyMath_random(){
    return Math.random();
}

function MyMath_floor(vl){
    return Math.floor(vl);
}
